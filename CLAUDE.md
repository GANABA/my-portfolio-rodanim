# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Project Overview

Portfolio personnel de **Rodanim Ganaba**, étudiant en BUT 3 Informatique, admis au Master « Intelligent Systems and Applications » (Université de Tours, rentrée septembre 2026).

Le site est positionné pour une **recherche d'alternance IA / Dev à partir de septembre 2026** — c'est l'objectif qui gouverne le contenu et la hiérarchie de l'information. Les projets IA passent avant les projets web.

**Stack** : Vue 3 (`<script setup>`) + Vite + Vue Router + Tailwind CSS + vue-i18n
**Langues** : français (référence) et anglais
**Déploiement** : Netlify sur push vers `main` → https://rodanim-ganaba.netlify.app/

---

## Development Commands

**npm uniquement.** Le gestionnaire de paquets est npm, et `package-lock.json` est le seul lockfile du dépôt. Ne jamais y ajouter un `pnpm-lock.yaml` ou un `yarn.lock` : Netlify choisit son installeur d'après le lockfile qu'il trouve, donc un second lockfile fait installer les dépendances avec un outil que personne n'utilise en local. Il diverge alors en silence et le déploiement casse sur `ERR_PNPM_OUTDATED_LOCKFILE` à la première modification de `package.json`.

**Node 20.19+ ou 22.12+ requis** — Vite 7 utilise `crypto.hash`, une API Node 20+. Sur une version antérieure le build échoue avec `crypto.hash is not a function`. Épinglé dans `.nvmrc`, dans `netlify.toml` (`NODE_VERSION = "22"`) et dans le champ `engines`.

```bash
npm install       # Installe les dépendances
npm run dev       # Serveur de dev — http://localhost:5173
npm run build     # Build de production vers dist/
npm run preview   # Sert le build — http://localhost:4173
```

Il n'y a **pas de tests** ni de linter configurés. La vérification se fait sur `npm run build` puis `npm run preview`, en parcourant le site dans les deux langues.

---

## Architecture

### Arborescence réelle

```
src/
├── components/
│   ├── Navbar.vue          # Nav fixe + sélecteur de langue FR|EN
│   └── Footer.vue          # Footer global, année calculée
├── pages/
│   ├── Home.vue            # Page unique à sections ancrées
│   ├── Experiences.vue     # Parcours (onglets) + Datathon + soft skills
│   ├── Projects.vue        # Liste complète des projets
│   └── ProjectDetail.vue   # Fiche projet — /project/:id
├── i18n/
│   ├── index.js            # createI18n + résolution de la locale initiale
│   ├── fr.js               # Messages français (référence)
│   └── en.js               # Messages anglais
├── composables/
│   └── useLocale.js        # Lecture / changement de langue
├── data/
│   └── projects.js         # 9 projets + helpers de localisation
├── router/index.js
├── App.vue                 # Navbar + router-view + Footer, meta réactives
├── main.js
└── style.css               # Directives Tailwind + globales
```

`Navbar` et `Footer` sont montés **une seule fois dans `App.vue`** — les pages ne contiennent ni l'un ni l'autre.

### Routing

Défini dans `src/router/index.js` :

| Route | Page |
|---|---|
| `/` | `Home.vue` |
| `/experiences` | `Experiences.vue` |
| `/projects` | `Projects.vue` |
| `/project/:id` | `ProjectDetail.vue` (id numérique) |
| `/:pathMatch(.*)*` | redirection vers `/` |

**`Home.vue` est une page unique**, pas un ensemble de routes. Ses sections sont des ancres : `#about`, `#competences`, `#projets`, `#contact`. Il n'existe pas de route `/about`, `/skills` ou `/contact` — ne pas les ajouter au sitemap.

Le scroll est remis en haut à chaque navigation, sauf retour arrière (position restaurée).

---

## Internationalisation

`vue-i18n` **11.x en mode Composition API** — `legacy: false`. Le mode Legacy est déprécié en v11 et supprimé en v12 : ne pas le réactiver.

### Règle principale

> Toute chaîne visible par l'utilisateur passe par `fr.js` **et** `en.js`. Jamais de texte en dur dans un template.

Exceptions légitimes : les noms propres et technologies (`Python`, `Vue.js`, `FORVIA`…), qui restent dans les composants ou les données.

### Utilisation

```js
// Dans un composant
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
```

Pour la langue courante et le changement de langue, passer par le composable :

```js
import { useLocale } from '../composables/useLocale.js'
const { t, locale, locales, setLocale } = useLocale()
```

`setLocale()` fait trois choses ensemble — état vue-i18n, `localStorage`, et attribut `lang` du document. Ne pas écrire `i18n.global.locale.value` directement, sinon `<html lang>` se désynchronise.

Locale initiale : choix mémorisé → langue du navigateur → `fr`.

### Données structurées

Les listes et objets (stages, formations, soft skills, Datathon) vivent dans les fichiers de locale et se lisent avec `tm()` puis `rt()` — voir le helper `resolveList()` dans `Experiences.vue`. `t()` ne fonctionne que sur des chaînes.

### Texte riche

Les paragraphes contenant des `<strong>` sont stockés en HTML dans les locales et rendus via `v-html`, avec `warnHtmlMessage: false`.

**Ce choix n'est valable que tant que le projet n'a aucune saisie utilisateur** — aujourd'hui il n'y a ni formulaire, ni query param rendu, ni appel API : tout le contenu interpolé est écrit à la main. Si une entrée utilisateur apparaît un jour, il faudra basculer sur le composant `<i18n-t>` avec slots nommés.

### Pièges

- **Le `|` est le séparateur de pluriel de vue-i18n.** Un message contenant un pipe littéral doit l'échapper : `"Titre {'|'} Suffixe"`. Sinon seule la première partie s'affiche.
- La locale n'est pas dans l'URL : le HTML servi reste français et c'est le français qui est indexé. `App.vue` met à jour `document.title` et la meta description côté client via un `watch` sur la locale.

---

## Données projets

`src/data/projects.js` — 9 projets, ids 1 à 9.

```js
{
  id: number,
  title: string,              // FR
  shortDescription: string,   // FR
  fullDescription: string,    // FR uniquement
  context: string,            // FR uniquement
  objectives: string[],       // FR uniquement
  features: string[],         // FR uniquement
  technologies: string[],
  image: string,              // chemin dans /public/images/
  githubLink: string,
  liveLink: string | null,
  featured: boolean,
  en: {                       // traduction partielle
    title: string,
    shortDescription: string,
    role?: string,
    duration?: string,
  },
  privateRepo?: boolean,      // dépôt non public — affiche une mention dédiée
  teamSize?: number,
  role?: string,
  duration?: string,
  methodology?: string,
}
```

**La prose longue n'est volontairement pas traduite.** En anglais, `ProjectDetail.vue` affiche une mention l'annonçant et marque ces blocs `lang="fr"`.

Deux helpers exportés — les utiliser plutôt que de lire `projects` directement dans un composant :

- `localizedProject(project, locale)` — fusionne le bloc `en` par-dessus les champs français
- `localizedProjects(locale)` — la version liste

### Convention non devinable

`Home.vue` n'affiche pas tous les projets ni les plus récents : l'ordre est **explicite** via

```js
const featuredOrder = [9, 8, 2, 3]  // Assistant Financier IA, ParkMR, TINA, GPFE
```

Les projets IA d'abord — c'est un choix de positionnement pour l'alternance, pas un tri technique. Le modifier change le message envoyé aux recruteurs.

---

## Design

### Thème

Palette claire minimaliste définie dans `tailwind.config.js` :

| Token | Valeur | Usage |
|---|---|---|
| `dark` | `#0A0A0A` | Texte principal, fonds inversés |
| `light` | `#FAFAFA` | Fond de page |
| `accent` | `#1E40AF` | Bleu marine — liens, états actifs, focus |
| `accent-dim` | `#1E3A8A` | Variante |
| `grey.50` → `grey.900` | | Hiérarchie de texte et bordures |

**Polices** : `font-mono` = Space Mono (labels, nav, métadonnées) · `font-sans` = Manrope (titres, corps). Chargées depuis Google Fonts dans `index.html`.

**Animations** : `animate-reveal`, `animate-slide-up`, `animate-fade-in`, `animate-draw-line`. Les entrées du hero sont décalées avec des `animation-delay` inline.

Le langage visuel repose sur des **filets fins** (`border-grey-200`), des grilles `md:grid-cols-12` (label sur 3 colonnes, contenu sur 9) et des libellés numérotés en monospace (`01 — À PROPOS`). Pas d'ombres, pas de dégradés, pas de coins arrondis.

> Le site utilisait auparavant un thème dark navy avec glassmorphism. Toute trace en a été retirée. Si du code réintroduit `glass`, `card-modern`, `accent-blue`, `text-text-primary` ou `shadow-glow`, c'est un reliquat : ces classes n'existent plus.

### Responsive

Mobile-first. Points de rupture Tailwind standard (`sm` 640, `md` 768, `lg` 1024, `xl` 1280). `md` est la bascule desktop de la Navbar (burger en dessous).

---

## SEO

`index.html` porte le titre, la meta description, les balises Open Graph / Twitter Card, le JSON-LD `schema.org/Person`, la canonical et la vérification Bing.

`public/` contient `robots.txt`, `sitemap.xml`, `og-image.png` (1200×630) et `favicon.ico`.

**En modifiant le contenu, penser à mettre à jour** :
1. La meta description et le JSON-LD dans `index.html` si le positionnement change
2. `sitemap.xml` si une route ou un projet est ajouté
3. `og-image.png` si le titre ou l'accroche change

Le sitemap ne doit lister que des routes réelles — pas d'URL redirigée vers `/`.

---

## Images

`public/images/` — captures de projets référencées par `projects.js`.

`vite-plugin-image-optimizer` est branché dans `vite.config.js` et compresse ces fichiers **à la build uniquement** (les sources ne sont pas modifiées). Il dépend de `sharp` et `svgo` : sans eux, le build affiche des erreurs d'optimisation mais réussit quand même.

Éviter d'ajouter des images non référencées — elles sont déployées quand même.

---

## Tâches courantes

### Ajouter un projet

1. Ajouter l'objet dans `src/data/projects.js` (id suivant), **avec son bloc `en`**
2. Déposer la capture dans `public/images/`
3. Ajouter `https://rodanim-ganaba.netlify.app/project/<id>` dans `public/sitemap.xml`
4. Mettre `featured: true` s'il doit apparaître sur `/projects` avec le badge
5. Pour qu'il figure sur la page d'accueil, l'ajouter à `featuredOrder` dans `Home.vue`

### Ajouter du texte visible

1. Ajouter la clé dans `src/i18n/fr.js`
2. Ajouter la même clé dans `src/i18n/en.js`
3. L'utiliser via `t('namespace.cle')`

### Ajouter une page

1. Créer le composant dans `src/pages/`
2. Déclarer la route dans `src/router/index.js`
3. Ajouter le lien dans `Navbar.vue` (desktop **et** menu burger) et éventuellement `Footer.vue`
4. Ajouter l'URL dans `public/sitemap.xml`
5. Ne pas y remettre de `<footer>` : il est global

---

## Contenu et style

- **Langue de référence** : français. L'anglais suit.
- **Code** : identifiants en anglais, commentaires en français.
- **Ton** : professionnel, factuel, orienté résultats. Privilégier les chiffres vérifiables (« 86 recommandations correctes sur 100 ») aux formules vagues.
- Ne pas gonfler le parcours : le contenu doit rester exact, un recruteur peut le recouper avec le CV et LinkedIn.

---

## État du projet

- **Pas de gestion d'état** : aucun besoin à ce stade. Pinia si nécessaire un jour.
- **Pas de tests, pas de TypeScript, pas de linter.**
- **Pas de backend.** Le contact passe par des liens `mailto:` et `tel:` — il n'y a plus de formulaire.
- `.env` et `.env.example` contiennent encore des clés **EmailJS inutilisées** : la dépendance `@emailjs/browser` et le formulaire ont été retirés. Vestige à nettoyer.
- `src/assets/vue.svg` et `public/vite.svg` sont des restes du template Vite.

---

## Git

Branche principale : `main` — **tout push déclenche un déploiement Netlify**.

Le build Netlify est décrit dans `netlify.toml` : commande, dossier publié, version de Node, et la redirection SPA qui renvoie toutes les routes vers `index.html` (indispensable avec `createWebHistory`, sinon un accès direct à `/projects` renvoie un 404).

Travailler sur une branche par sujet (`chore/`, `feat/`, `docs/`), puis PR vers `main`. Messages de commit en français, à l'impératif, expliquant le *pourquoi* et pas seulement le *quoi*.

---

## Contact

**Rodanim Ganaba** · ganabarodanimkm@gmail.com
GitHub : https://github.com/GANABA · LinkedIn : https://www.linkedin.com/in/ganaba-r-melchis%C3%A9dech/
