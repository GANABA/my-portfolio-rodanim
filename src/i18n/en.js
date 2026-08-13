// English messages. Mirrors the structure of fr.js — keep both in sync.
export default {
  nav: {
    experiences: 'BACKGROUND',
    experiencesLong: 'BACKGROUND & EXPERIENCE',
    projects: 'PROJECTS',
    contact: 'CONTACT',
    cv: 'RESUME',
    cvFile: '/CV-Rodanim-Ganaba-Alternance-2026.pdf',
    menu: 'Menu',
    language: 'Language',
  },

  meta: {
    // {'|'} : the pipe is vue-i18n's plural separator and must be escaped as a
    // literal, otherwise it is parsed as a plural form.
    title: "Rodanim Ganaba — AI & Applications Developer {'|'} Portfolio",
    description:
      'AI & full-stack developer: AI agents, RAG, LLM, machine learning. Looking for a work-study placement (AI Master\'s, University of Tours) starting September 2026.',
  },

  hero: {
    label: 'PORTFOLIO 2026',
    firstName: 'Rodanim',
    lastName: 'Ganaba',
    subtitle: 'AI & Applications Developer — Machine Learning, LLM & Full-Stack',
    availability: 'AVAILABLE — LOOKING FOR AN AI / DEV WORK-STUDY · SEPT. 2026',
    ctaProjects: 'VIEW MY PROJECTS',
    ctaContact: 'CONTACT',
    scroll: 'SCROLL',
  },

  about: {
    label: '01 — ABOUT',
    title: 'Specialised in applied AI & application development',
    // Trusted HTML content (no user input anywhere in this project) — rendered via v-html.
    p1: 'Currently completing a <strong class="text-dark font-semibold">French Bachelor in Computer Science</strong> (IUT Nord Franche-Comté) and <strong class="text-dark font-semibold">admitted to the “Intelligent Systems and Applications” Master\'s programme at the University of Tours</strong> (starting September 2026), I design <strong class="text-dark font-semibold">RAG-powered conversational AI agents</strong> in an industrial setting (internship at Forvia).',
    p2: 'I combine <strong class="text-dark font-semibold">machine learning</strong>, <strong class="text-dark font-semibold">generative AI (LLMs)</strong> and <strong class="text-dark font-semibold">full-stack development</strong> to ship concrete, business-driven solutions.',
    p3: 'I am looking for a <strong class="text-accent">work-study placement for my Master\'s, starting September 2026</strong>.',
    statProjects: 'PROJECTS',
    statYears: 'YEARS',
    statTechs: 'TECHNOLOGIES',
  },

  skills: {
    label: '02 — SKILLS',
    title: 'Tech Stack',
    ai: 'AI & AGENTS',
    data: 'DATA & MACHINE LEARNING',
    web: 'WEB DEVELOPMENT',
    tools: 'TOOLS & DEVOPS',
  },

  projects: {
    label: '03 — PROJECTS',
    title: 'Work',
    viewAll: 'VIEW ALL PROJECTS',
    code: 'CODE (GITHUB)',
    demo: 'DEMO',
    github: 'GITHUB',
    live: 'LIVE',
    featured: 'FEATURED',
    allTitle: 'All my projects',
    allSubtitle: '{count} projects · Web, Data Science & IoT',
    back: 'BACK',
  },

  projectDetail: {
    back: 'BACK TO PROJECTS',
    type: 'TYPE',
    duration: 'DURATION',
    team: 'TEAM',
    teamUnit: 'people',
    role: 'ROLE',
    github: 'GITHUB',
    liveDemo: 'LIVE DEMO',
    description: 'DESCRIPTION',
    context: 'CONTEXT',
    objectives: 'OBJECTIVES',
    features: 'FEATURES',
    stack: 'TECH STACK',
    privateRepo: 'Code hosted on the school GitLab — repository not publicly accessible.',
    frenchOnly: 'The full case study below is available in French only.',
    notFound: 'Project not found',
    backToProjects: 'BACK TO PROJECTS',
    types: {
      ai: 'AI & Data Science',
      iot: 'IoT',
      web: 'Web Application',
    },
  },

  contact: {
    label: '04 — CONTACT',
    title: "Let's talk about your project",
    intro:
      'I am looking for a <strong class="text-dark font-semibold">work-study placement (AI Master\'s, Sept. 2026)</strong> and remain open to freelance projects and professional opportunities.',
    github: 'GITHUB',
    linkedin: 'LINKEDIN',
    cv: 'RESUME',
  },

  footer: {
    builtWith: 'Built with Vue.js & Tailwind CSS',
  },

  experiences: {
    label: '05 — BACKGROUND',
    titleLine1: 'Education',
    titleLine2: '& Experience',
    intro:
      'Every step built a skill. From Benin to France, a path oriented towards software development and artificial intelligence.',
    tabInternships: 'INTERNSHIPS',
    tabEducation: 'EDUCATION',
    sectionInternships: 'PROFESSIONAL EXPERIENCE',
    sectionEducation: 'ACADEMIC BACKGROUND',
    current: 'ONGOING',
    finished: 'COMPLETED',
    graduated: 'GRADUATED',
    missions: 'RESPONSIBILITIES & ACHIEVEMENTS',
    technologies: 'TECHNOLOGIES',
    competencies: 'SKILLS DEVELOPED',
    modules: 'KEY MODULES',
    distinctions: 'AWARDS',
    missionsResults: 'RESPONSIBILITIES & RESULTS',
    softSkillsLabel: 'SOFT SKILLS',
    softSkillsTitle: 'Soft skills',
    ctaLabel: 'CONTACT',
    ctaTitle: 'Got an opportunity for me?',
    ctaText:
      'I am looking for a <strong class="text-dark font-semibold">work-study placement (AI Master\'s, September 2026)</strong> and remain open to freelance projects.',
    ctaDownload: 'DOWNLOAD MY RESUME',
    ctaContact: 'GET IN TOUCH',

    jobs: [
      {
        title: 'Applications & AI Agents Developer',
        institution: 'FORVIA',
        location: 'Bavans, France',
        period: 'Feb. 2026 – Present',
        current: true,
        description:
          'Final-year internship. Contributing to the design, development and improvement of internal AI agents and engineer-facing applications, within the engineering and digital teams.',
        highlights: [
          'Designing RAG-powered conversational AI agents for engineers and CAD designers',
          'Building Power BI dashboards (star schema, semantic model)',
          'Business needs analysis, solution proposals and technical documentation',
          'Contributing to AI project management: specification, tracking, reporting',
          'Working with the engineering and digital teams',
        ],
        technologies: ['Sinequa', 'LLM', 'RAG', 'AI Agents', 'Power BI', 'REST API', 'Python'],
      },
      {
        title: 'Full-Stack Web Developer',
        institution: 'Light Innovation',
        location: 'Parakou, Benin',
        period: 'Nov. 2024 – Feb. 2025',
        current: false,
        description:
          'End-to-end design and development of a hotel room booking web application, with both a customer interface and an admin panel.',
        highlights: [
          'Client needs analysis and application architecture design',
          'Front-end development with HTML, CSS, Bootstrap and JavaScript',
          'Back-end implementation: PHP, MySQL, session handling and authentication',
          'Real-time booking system with availability management',
          'Admin panel and customer review system',
        ],
        technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'HTML/CSS'],
      },
      {
        title: 'Systems Analyst & Programmer',
        institution: 'CABRO GROUP SARL',
        location: 'Parakou, Benin',
        period: 'Apr. 2024 – Jul. 2024',
        current: false,
        description:
          'Paired development of a web application for managing final-year student projects at a university.',
        highlights: [
          'Writing the specification and analysing functional requirements',
          'Database modelling (conceptual data model)',
          'Full back-end development with PHP and MySQL',
          'Student pair management and supervisor assignment',
          'Project defence before the examination board',
        ],
        technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'UML'],
      },
    ],

    education: [
      {
        title: 'BUT 3 Computer Science – Application Development',
        institution: 'IUT Nord Franche-Comté',
        location: 'Belfort, France',
        period: '2025 – Present',
        current: true,
        description:
          'Three-year degree focused on advanced software development, IoT and artificial intelligence. Real team projects run with agile methodologies.',
        highlights: [
          'Full-stack development: Vue.js, Spring Boot, Laravel, Node.js',
          'Software architecture and design patterns',
          'Agile/Scrum project management',
          'Embedded IoT systems (Arduino)',
          'Artificial intelligence and machine learning',
          'DevOps: Docker, CI/CD, virtualisation',
        ],
        modules: [
          'Software architecture',
          'Vue.js / React',
          'Spring Boot',
          'Laravel',
          'Machine Learning',
          'IoT & Embedded',
          'Docker / DevOps',
          'Advanced databases',
          'Cybersecurity',
        ],
      },
      {
        title: "Professional Bachelor's – Business Computing",
        institution: 'IUT de Parakou',
        location: 'Parakou, Benin',
        period: '2021 – 2024',
        current: false,
        description:
          'Broad training in web and mobile development, database management and enterprise information systems.',
        highlights: [
          'Web development (HTML, CSS, JavaScript, PHP) and mobile',
          'Design and management of relational databases',
          'Information systems, ERP and business software',
          'IT project management',
          'Final dissertation defended before the examination board',
        ],
        modules: [
          'PHP / MySQL',
          'JavaScript ES6+',
          'Algorithms',
          'Automata',
          'Networks',
          'Operating systems',
          'UML / Merise',
          'Project management',
          'Mobile (Android)',
        ],
      },
    ],

    datathon: {
      badge: '🏆 GRAND PRIZE',
      meta: 'June 2026 · AI Developer',
      title: 'Health AI Datathon 2026 — “ChuteGeria IA”',
      institution: 'University of the French West Indies',
      location: 'Guadeloupe',
      description:
        'Designed a decision-support MVP in 3 days for triaging elderly patients admitted to the emergency department after a fall (admission, observation or discharge home). Winner of the <strong class="text-dark font-semibold">DU IASH 2026 Grand Prize</strong>.',
      highlights: [
        'Business needs analysis with healthcare professionals and design of the AI infrastructure',
        'RAG + LLM architecture built on vectorised international clinical guidelines',
        'MVP delivered by an international team (Guadeloupe / Montreal) working collaboratively',
        '86 correct recommendations out of 100 patient records, validated by specialists',
      ],
      technologies: ['Python', 'RAG', 'LLM', 'ChromaDB', 'Ollama', 'Mistral AI', 'FastAPI', 'AWS'],
    },

    softSkills: [
      {
        icon: '→',
        label: 'Autonomy & Initiative',
        description:
          'Able to run projects entirely independently, from design through to production.',
      },
      {
        icon: '○',
        label: 'Teamwork',
        description: 'Experience working in pairs and in Agile/Scrum teams on real projects.',
      },
      {
        icon: '◇',
        label: 'Intellectual curiosity',
        description:
          'Constant technology watch, passionate about AI and new software architectures.',
      },
      {
        icon: '□',
        label: 'Adaptability',
        description: 'Quick to adapt to new environments, technologies and ways of working.',
      },
      {
        icon: '△',
        label: 'Problem solving',
        description: 'Analytical approach to identifying issues and proposing concrete solutions.',
      },
      {
        icon: '✦',
        label: 'Communication',
        description:
          'Comfortable presenting, writing specifications and working with cross-functional teams.',
      },
    ],
  },
}
