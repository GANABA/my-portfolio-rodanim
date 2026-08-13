// Messages français — locale de référence.
// Toute nouvelle chaîne visible doit exister ici ET dans en.js.
export default {
  nav: {
    experiences: 'PARCOURS',
    experiencesLong: 'PARCOURS & EXPÉRIENCES',
    projects: 'PROJETS',
    contact: 'CONTACT',
    cv: 'CV',
    cvFile: '/CV-Rodanim-Ganaba-Alternance-2026.pdf',
    menu: 'Menu',
    language: 'Langue',
  },

  meta: {
    // {'|'} : le pipe est le séparateur de pluriel de vue-i18n, il doit être
    // échappé en littéral sous peine d'être interprété comme une forme plurielle.
    title: "Rodanim Ganaba — Développeur IA & Applications {'|'} Portfolio",
    description:
      'Développeur IA & full-stack : agents IA, RAG, LLM, machine learning. Recherche une alternance (Master IA, Université de Tours) à partir de septembre 2026.',
  },

  hero: {
    label: 'PORTFOLIO 2026',
    firstName: 'Rodanim',
    lastName: 'Ganaba',
    subtitle: 'Développeur IA & Applications — Machine Learning, LLM & Full-Stack',
    availability: 'DISPONIBLE — RECHERCHE ALTERNANCE IA / DEV · SEPT. 2026',
    ctaProjects: 'VOIR MES PROJETS',
    ctaContact: 'CONTACT',
    scroll: 'SCROLL',
  },

  about: {
    label: '01 — À PROPOS',
    title: "Spécialisé en IA appliquée & développement d'applications",
    // Contenu HTML de confiance (aucune saisie utilisateur dans ce projet) — rendu via v-html.
    p1: 'Actuellement en <strong class="text-dark font-semibold">BUT Informatique</strong> (IUT Nord Franche-Comté) et <strong class="text-dark font-semibold">admis au Master « Intelligent Systems and Applications » de l\'Université de Tours</strong> (rentrée septembre 2026), je conçois aujourd\'hui des <strong class="text-dark font-semibold">agents IA conversationnels avec moteur RAG</strong> dans un contexte industriel (stage chez Forvia).',
    p2: 'Je combine le <strong class="text-dark font-semibold">machine learning</strong>, l\'<strong class="text-dark font-semibold">IA générative (LLM)</strong> et le <strong class="text-dark font-semibold">développement full-stack</strong> pour livrer des solutions concrètes, pensées pour des besoins métier.',
    p3: 'Je recherche une <strong class="text-accent">alternance pour mon Master, à partir de septembre 2026</strong>.',
    statProjects: 'PROJETS',
    statYears: 'ANNÉES',
    statTechs: 'TECHNOS',
  },

  skills: {
    label: '02 — COMPÉTENCES',
    title: 'Stack Technique',
    ai: 'IA & AGENTS',
    data: 'DATA & MACHINE LEARNING',
    web: 'DÉVELOPPEMENT WEB',
    tools: 'OUTILS & DEVOPS',
  },

  projects: {
    label: '03 — PROJETS',
    title: 'Réalisations',
    viewAll: 'VOIR TOUS LES PROJETS',
    code: 'CODE (GITHUB)',
    demo: 'DÉMO',
    github: 'GITHUB',
    live: 'LIVE',
    featured: 'FEATURED',
    allTitle: 'Tous mes projets',
    allSubtitle: '{count} projets réalisés · Web, Data Science & IoT',
    back: 'RETOUR',
  },

  projectDetail: {
    back: 'RETOUR AUX PROJETS',
    type: 'TYPE',
    duration: 'DURÉE',
    team: 'ÉQUIPE',
    teamUnit: 'pers.',
    role: 'RÔLE',
    github: 'GITHUB',
    liveDemo: 'DÉMO LIVE',
    description: 'DESCRIPTION',
    context: 'CONTEXTE',
    objectives: 'OBJECTIFS',
    features: 'FONCTIONNALITÉS',
    stack: 'STACK TECH',
    privateRepo: "Code hébergé sur le GitLab de l'école — dépôt non accessible au public.",
    // Vide en FR : l'avertissement ne s'affiche qu'en anglais (v-if sur la chaîne)
    frenchOnly: '',
    notFound: 'Projet non trouvé',
    backToProjects: 'RETOUR AUX PROJETS',
    types: {
      ai: 'IA & Data Science',
      iot: 'IoT',
      web: 'Application Web',
    },
  },

  contact: {
    label: '04 — CONTACT',
    title: 'Discutons de votre projet',
    intro:
      'Je recherche une <strong class="text-dark font-semibold">alternance (Master IA, sept. 2026)</strong> et reste ouvert aux projets freelance et opportunités professionnelles.',
    github: 'GITHUB',
    linkedin: 'LINKEDIN',
    cv: 'CV',
  },

  footer: {
    builtWith: 'Développé avec Vue.js & Tailwind CSS',
  },

  experiences: {
    label: '05 — PARCOURS',
    titleLine1: 'Formations',
    titleLine2: '& Expériences',
    intro:
      "Chaque étape a construit une compétence. Du Bénin à la France, un parcours orienté vers le développement logiciel et l'intelligence artificielle.",
    tabInternships: 'STAGES',
    tabEducation: 'PARCOURS ACADÉMIQUE',
    sectionInternships: 'EXPÉRIENCES EN ENTREPRISE',
    sectionEducation: 'CURSUS UNIVERSITAIRE',
    current: 'EN COURS',
    finished: 'TERMINÉ',
    graduated: 'DIPLÔME OBTENU',
    missions: 'MISSIONS & RÉALISATIONS',
    technologies: 'TECHNOLOGIES',
    competencies: 'COMPÉTENCES DÉVELOPPÉES',
    modules: 'MODULES CLÉS',
    distinctions: 'DISTINCTIONS',
    missionsResults: 'MISSIONS & RÉSULTATS',
    softSkillsLabel: 'SOFT SKILLS',
    softSkillsTitle: 'Qualités humaines',
    ctaLabel: 'CONTACT',
    ctaTitle: 'Une opportunité à me proposer ?',
    ctaText:
      'Je recherche une <strong class="text-dark font-semibold">alternance (Master IA, septembre 2026)</strong> et reste ouvert aux projets freelance.',
    ctaDownload: 'TÉLÉCHARGER MON CV',
    ctaContact: 'ME CONTACTER',

    jobs: [
      {
        title: 'Développeur Applications & Agents IA',
        institution: 'FORVIA',
        location: 'Bavans, France',
        period: 'Fév. 2026 – Présent',
        current: true,
        description:
          "Stage de fin d'études du BUT3. Participation à la conception, au développement et à l'amélioration d'agents IA internes et d'applications dédiées aux ingénieurs, au sein des équipes engineering et digitales.",
        highlights: [
          "Conception d'agents IA conversationnels avec moteur RAG pour les ingénieurs et CAD designers",
          'Développement de dashboards Power BI (star schema, modèle sémantique)',
          'Étude des besoins métiers, proposition de solutions et documentation technique',
          'Contribution au pilotage des projets IA : spécification, suivi, reporting',
          'Interactions avec les équipes engineering et digitales',
        ],
        technologies: ['Sinequa', 'LLM', 'RAG', 'Agents IA', 'Power BI', 'API REST', 'Python'],
      },
      {
        title: 'Développeur Web Full-Stack',
        institution: 'Light Innovation',
        location: 'Parakou, Bénin',
        period: 'Nov. 2024 – Fév. 2025',
        current: false,
        description:
          "Conception et développement complet d'une application web de réservation de chambres d'hôtel avec interface client et panneau d'administration.",
        highlights: [
          "Analyse des besoins clients et conception de l'architecture applicative",
          'Développement front-end avec HTML, CSS, Bootstrap et JavaScript',
          'Implémentation du back-end : PHP, MySQL, gestion des sessions et authentification',
          'Système de réservation en temps réel avec gestion des disponibilités',
          "Panneau d'administration et système d'avis clients",
        ],
        technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'HTML/CSS'],
      },
      {
        title: 'Analyste Programmeur',
        institution: 'CABRO GROUP SARL',
        location: 'Parakou, Bénin',
        period: 'Avr. 2024 – Juil. 2024',
        current: false,
        description:
          "Développement en binôme d'une application web de gestion des projets de fin d'études pour un établissement universitaire.",
        highlights: [
          'Rédaction du cahier des charges et analyse des besoins fonctionnels',
          'Modélisation de la base de données (MCD)',
          'Développement back-end complet avec PHP et MySQL',
          'Gestion des binômes étudiants et affectation des encadreurs',
          'Soutenance du projet devant le jury',
        ],
        technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'UML'],
      },
    ],

    education: [
      {
        title: "BUT 3 Informatique – Développement d'applications",
        institution: 'IUT Nord Franche-Comté',
        location: 'Belfort, France',
        period: '2025 – Présent',
        current: true,
        description:
          'Formation bac+3 orientée développement logiciel avancé, IoT et intelligence artificielle. Projets réels en équipe avec méthodologies agiles.',
        highlights: [
          'Développement full-stack : Vue.js, Spring Boot, Laravel, Node.js',
          'Architecture logicielle et design patterns',
          'Gestion de projets Agile/Scrum',
          'Systèmes embarqués IoT (Arduino)',
          'Intelligence artificielle et machine learning',
          'DevOps : Docker, CI/CD, virtualisation',
        ],
        modules: [
          'Architecture logicielle',
          'Vue.js / React',
          'Spring Boot',
          'Laravel',
          'Machine Learning',
          'IoT & Embarqué',
          'Docker / DevOps',
          'BDD avancées',
          'Sécurité informatique',
        ],
      },
      {
        title: 'Licence Professionnelle – Informatique de Gestion',
        institution: 'IUT de Parakou',
        location: 'Parakou, Bénin',
        period: '2021 – 2024',
        current: false,
        description:
          "Formation polyvalente en développement web et mobile, gestion des bases de données et systèmes d'information d'entreprise.",
        highlights: [
          'Développement web (HTML, CSS, JavaScript, PHP) et mobile',
          'Conception et gestion de bases de données relationnelles',
          "Systèmes d'information, ERP et logiciels de gestion",
          'Conduite et gestion de projets informatiques',
          'Mémoire de fin d\'études soutenu devant jury',
        ],
        modules: [
          'PHP / MySQL',
          'JavaScript ES6+',
          'Algorithmique',
          'Automates',
          'Réseaux',
          "Systèmes d'exploitation",
          'UML / Merise',
          'Gestion de projet',
          'Mobile (Android)',
        ],
      },
    ],

    datathon: {
      badge: '🏆 GRAND PRIX',
      meta: 'Juin 2026 · Développeur IA',
      title: 'Datathon IA Santé 2026 — « ChuteGeria IA »',
      institution: 'Université des Antilles',
      location: 'Guadeloupe',
      description:
        "Conception en 3 jours d'un MVP d'aide à la décision pour l'orientation aux urgences des patients âgés admis après une chute (hospitalisation, observation ou retour à domicile). Lauréat du <strong class=\"text-dark font-semibold\">Grand Prix du Mémoire DU IASH 2026</strong>.",
      highlights: [
        "Analyse des besoins métiers avec les professionnels de santé et conception de l'infrastructure IA",
        'Architecture RAG + LLM s\'appuyant sur les recommandations internationales vectorisées',
        'MVP livré en équipe internationale (Guadeloupe / Montréal) en méthode collaborative',
        '86 recommandations correctes sur 100 comptes rendus patients, validées par les spécialistes',
      ],
      technologies: ['Python', 'RAG', 'LLM', 'ChromaDB', 'Ollama', 'Mistral AI', 'FastAPI', 'AWS'],
    },

    softSkills: [
      {
        icon: '→',
        label: 'Autonomie & Initiative',
        description:
          'Capable de mener des projets en totale autonomie, de la conception à la mise en production.',
      },
      {
        icon: '○',
        label: 'Travail en équipe',
        description:
          'Expérience de travail en binôme et en équipe Agile/Scrum sur des projets réels.',
      },
      {
        icon: '◇',
        label: 'Curiosité intellectuelle',
        description:
          "Veille technologique constante, passion pour l'IA et les nouvelles architectures logicielles.",
      },
      {
        icon: '□',
        label: 'Adaptabilité',
        description:
          "S'adapte rapidement à de nouveaux environnements, technologies et méthodes de travail.",
      },
      {
        icon: '△',
        label: 'Résolution de problèmes',
        description:
          'Approche analytique pour identifier les problématiques et proposer des solutions concrètes.',
      },
      {
        icon: '✦',
        label: 'Communication',
        description:
          "À l'aise pour présenter, rédiger des cahiers des charges et interagir avec des équipes pluridisciplinaires.",
      },
    ],
  },
}
