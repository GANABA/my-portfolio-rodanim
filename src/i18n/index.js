import { createI18n } from 'vue-i18n'
import fr from './fr.js'
import en from './en.js'

export const SUPPORTED_LOCALES = ['fr', 'en']
export const DEFAULT_LOCALE = 'fr'
export const STORAGE_KEY = 'portfolio-locale'

/**
 * Locale de départ : choix mémorisé > langue du navigateur > français.
 */
function resolveInitialLocale() {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored && SUPPORTED_LOCALES.includes(stored)) return stored

  const browser = navigator.language?.split('-')[0]
  if (browser && SUPPORTED_LOCALES.includes(browser)) return browser

  return DEFAULT_LOCALE
}

const i18n = createI18n({
  // Composition API : le mode Legacy est déprécié en v11 et supprimé en v12.
  legacy: false,
  locale: resolveInitialLocale(),
  fallbackLocale: DEFAULT_LOCALE,
  messages: { fr, en },
  // Certains messages contiennent des <strong> et sont rendus via v-html.
  // Sans risque ici : ce projet n'a aucune saisie utilisateur, tout le
  // contenu interpolé est écrit à la main dans fr.js / en.js.
  warnHtmlMessage: false,
})

export default i18n
