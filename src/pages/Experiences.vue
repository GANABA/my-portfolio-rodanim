<template>
  <div class="bg-light text-dark font-sans min-h-screen">

    <!-- Hero -->
    <section class="py-16 sm:py-24 md:py-32 px-4 sm:px-6 border-b border-grey-200">
      <div class="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 md:gap-12 items-end">
        <div class="md:col-span-3">
          <span class="inline-block font-mono text-xs sm:text-sm tracking-widest text-grey-500">
            05 — PARCOURS
          </span>
        </div>
        <div class="md:col-span-9">
          <h1 class="text-4xl sm:text-5xl md:text-7xl font-sans font-bold leading-none mb-6">
            Formations<br />
            <span class="text-grey-400">&amp; Expériences</span>
          </h1>
          <p class="text-base sm:text-lg text-grey-600 max-w-2xl">
            Chaque étape a construit une compétence. Du Bénin à la France, un parcours orienté vers le développement logiciel et l'intelligence artificielle.
          </p>
        </div>
      </div>
    </section>

    <!-- Onglets -->
    <div class="sticky top-16 sm:top-20 z-20 bg-light/90 backdrop-blur-md border-b border-grey-200">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="flex">
          <button
            @click="activeTab = 'stages'"
            :class="activeTab === 'stages'
              ? 'border-b-2 border-accent text-accent'
              : 'text-grey-500 hover:text-dark'"
            class="font-mono text-xs tracking-widest py-4 px-4 sm:px-6 transition-colors duration-200"
          >
            STAGES
          </button>
          <button
            @click="activeTab = 'formation'"
            :class="activeTab === 'formation'
              ? 'border-b-2 border-accent text-accent'
              : 'text-grey-500 hover:text-dark'"
            class="font-mono text-xs tracking-widest py-4 px-4 sm:px-6 transition-colors duration-200"
          >
            PARCOURS ACADÉMIQUE
          </button>
        </div>
      </div>
    </div>

    <!-- ========================
         STAGES
    ========================= -->
    <section v-show="activeTab === 'stages'" class="py-16 sm:py-24 px-4 sm:px-6">
      <div class="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 md:gap-12">
        <div class="md:col-span-3">
          <span class="font-mono text-xs tracking-widest text-grey-500">EXPÉRIENCES EN ENTREPRISE</span>
        </div>
        <div class="md:col-span-9 space-y-0">
          <div
            v-for="(exp, index) in experiences"
            :key="index"
            class="group border-t border-grey-200 py-10 sm:py-14"
          >
            <div class="flex items-start gap-4 sm:gap-6 mb-6">
              <span class="font-mono text-xs text-grey-400 mt-1 shrink-0">0{{ index + 1 }}</span>
              <div class="flex-1">
                <div class="flex flex-wrap items-center gap-3 mb-2">
                  <span
                    class="font-mono text-xs tracking-wider px-2 py-0.5 border"
                    :class="exp.current ? 'border-accent text-accent' : 'border-grey-300 text-grey-500'"
                  >
                    {{ exp.current ? 'EN COURS' : 'TERMINÉ' }}
                  </span>
                  <span class="font-mono text-xs text-grey-400">{{ exp.period }}</span>
                </div>
                <h2 class="text-2xl sm:text-3xl font-sans font-bold group-hover:text-accent transition-colors">
                  {{ exp.title }}
                </h2>
                <div class="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-sm text-grey-600">
                  <span class="font-mono tracking-wide">{{ exp.institution }}</span>
                  <span v-if="exp.location" class="text-grey-400">{{ exp.location }}</span>
                </div>
              </div>
            </div>

            <div class="ml-10 space-y-6">
              <p class="text-grey-600 leading-relaxed">{{ exp.description }}</p>

              <div>
                <h4 class="font-mono text-xs tracking-widest text-grey-400 mb-4">MISSIONS & RÉALISATIONS</h4>
                <ul class="space-y-2">
                  <li
                    v-for="item in exp.highlights"
                    :key="item"
                    class="flex items-start gap-3 text-sm text-grey-700"
                  >
                    <span class="mt-2 w-4 h-px bg-accent shrink-0 inline-block"></span>
                    {{ item }}
                  </li>
                </ul>
              </div>

              <div v-if="exp.technologies">
                <h4 class="font-mono text-xs tracking-widest text-grey-400 mb-3">TECHNOLOGIES</h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in exp.technologies"
                    :key="tech"
                    class="px-3 py-1 border border-grey-300 text-dark font-mono text-xs hover:border-accent hover:text-accent transition-colors"
                  >{{ tech }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="border-t border-grey-200"></div>
        </div>
      </div>
    </section>

    <!-- ========================
         FORMATION
    ========================= -->
    <section v-show="activeTab === 'formation'" class="py-16 sm:py-24 px-4 sm:px-6">
      <div class="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 md:gap-12">
        <div class="md:col-span-3">
          <span class="font-mono text-xs tracking-widest text-grey-500">CURSUS UNIVERSITAIRE</span>
        </div>
        <div class="md:col-span-9 space-y-0">
          <div
            v-for="(edu, index) in education"
            :key="index"
            class="group border-t border-grey-200 py-10 sm:py-14"
          >
            <div class="flex items-start gap-4 sm:gap-6 mb-6">
              <span class="font-mono text-xs text-grey-400 mt-1 shrink-0">0{{ index + 1 }}</span>
              <div class="flex-1">
                <div class="flex flex-wrap items-center gap-3 mb-2">
                  <span
                    class="font-mono text-xs tracking-wider px-2 py-0.5 border"
                    :class="edu.current ? 'border-accent text-accent' : 'border-grey-300 text-grey-500'"
                  >
                    {{ edu.current ? 'EN COURS' : 'DIPLÔME OBTENU' }}
                  </span>
                  <span class="font-mono text-xs text-grey-400">{{ edu.period }}</span>
                </div>
                <h2 class="text-2xl sm:text-3xl font-sans font-bold group-hover:text-accent transition-colors">
                  {{ edu.title }}
                </h2>
                <div class="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-sm text-grey-600">
                  <span class="font-mono tracking-wide">{{ edu.institution }}</span>
                  <span v-if="edu.location" class="text-grey-400">{{ edu.location }}</span>
                </div>
              </div>
            </div>

            <div class="ml-10 space-y-6">
              <p class="text-grey-600 leading-relaxed">{{ edu.description }}</p>

              <div>
                <h4 class="font-mono text-xs tracking-widest text-grey-400 mb-4">COMPÉTENCES DÉVELOPPÉES</h4>
                <ul class="space-y-2">
                  <li
                    v-for="item in edu.highlights"
                    :key="item"
                    class="flex items-start gap-3 text-sm text-grey-700"
                  >
                    <span class="mt-2 w-4 h-px bg-accent shrink-0 inline-block"></span>
                    {{ item }}
                  </li>
                </ul>
              </div>

              <div v-if="edu.modules">
                <h4 class="font-mono text-xs tracking-widest text-grey-400 mb-3">MODULES CLÉS</h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="mod in edu.modules"
                    :key="mod"
                    class="px-3 py-1 border border-grey-300 text-dark font-mono text-xs hover:border-accent hover:text-accent transition-colors"
                  >{{ mod }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="border-t border-grey-200"></div>
        </div>
      </div>
    </section>

    <!-- Soft Skills -->
    <section class="py-16 sm:py-24 px-4 sm:px-6 border-t border-grey-200 bg-grey-50">
      <div class="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 md:gap-12">
        <div class="md:col-span-3">
          <span class="font-mono text-xs tracking-widest text-grey-500">SOFT SKILLS</span>
        </div>
        <div class="md:col-span-9">
          <h2 class="text-3xl sm:text-4xl font-bold mb-10">Qualités humaines</h2>
          <div class="grid sm:grid-cols-2 gap-6">
            <div
              v-for="skill in softSkills"
              :key="skill.label"
              class="flex items-start gap-4 group"
            >
              <div class="mt-1 w-8 h-8 border border-grey-300 flex items-center justify-center shrink-0 group-hover:border-accent group-hover:text-accent transition-colors">
                <span class="font-mono text-xs">{{ skill.icon }}</span>
              </div>
              <div>
                <h3 class="font-sans font-semibold text-dark group-hover:text-accent transition-colors mb-1">{{ skill.label }}</h3>
                <p class="text-sm text-grey-600 leading-relaxed">{{ skill.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 sm:py-24 px-4 sm:px-6 border-t border-grey-200">
      <div class="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 md:gap-12 items-center">
        <div class="md:col-span-3">
          <span class="font-mono text-xs tracking-widest text-grey-500">CONTACT</span>
        </div>
        <div class="md:col-span-9">
          <h2 class="text-3xl sm:text-4xl font-bold mb-6">Une opportunité à me proposer ?</h2>
          <p class="text-grey-600 mb-8 max-w-xl">
            Je suis disponible pour des stages, alternances ou projets freelance.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a
              href="/CV Rodanim Ganaba.pdf"
              download
              class="group inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-dark text-light border-2 border-dark font-mono text-xs tracking-wider hover:bg-transparent hover:text-dark transition-all duration-300"
            >
              TÉLÉCHARGER MON CV
              <svg class="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
              </svg>
            </a>
            <a
              href="mailto:ganabarodanimkm@gmail.com"
              class="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 border-2 border-dark text-dark font-mono text-xs tracking-wider hover:bg-dark hover:text-light transition-all duration-300"
            >
              ME CONTACTER
            </a>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('stages')

const experiences = [
  {
    title: 'Développeur Applications & Agents IA',
    institution: 'Faurecia Clean Mobility',
    location: 'France',
    period: 'Fév. 2026 – Présent',
    current: true,
    description: 'Stage de fin d\'études du BUT3. Participation à la conception, au développement et à l\'amélioration d\'agents IA internes et d\'applications dédiées aux ingénieurs, au sein des équipes engineering et digitales.',
    highlights: [
      'Investigation, conception et amélioration d\'agents IA internes destinés à soutenir les ingénieurs',
      'Développement de dashboards et d\'applications dédiées à l\'engineering',
      'Contribution au pilotage des projets IA : spécification, suivi, reporting',
      'Interactions avec les équipes engineering et digitales',
      'Identification des problématiques, formalisation des besoins et proposition de solutions IA innovantes',
    ],
    technologies: ['Python', 'LangChain', 'Agents IA', 'LLM', 'API REST', 'Power BI', 'Sinequa'],
  },
  {
    title: 'Développeur Web Full-Stack',
    institution: 'Light Innovation',
    location: 'Parakou, Bénin',
    period: 'Nov. 2024 – Fév. 2025',
    current: false,
    description: 'Conception et développement complet d\'une application web de réservation de chambres d\'hôtel avec interface client et panneau d\'administration.',
    highlights: [
      'Analyse des besoins clients et conception de l\'architecture applicative',
      'Développement front-end avec HTML, CSS, Bootstrap et JavaScript',
      'Implémentation du back-end : PHP, MySQL, gestion des sessions et authentification',
      'Système de réservation en temps réel avec gestion des disponibilités',
      'Panneau d\'administration et système d\'avis clients',
    ],
    technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'HTML/CSS'],
  },
  {
    title: 'Anayste Programmeur',
    institution: 'CABRO GROUP SARL',
    location: 'Parakou, Bénin',
    period: 'Avr. 2024 – Juil. 2024',
    current: false,
    description: 'Développement en binôme d\'une application web de gestion des projets de fin d\'études pour un établissement universitaire.',
    highlights: [
      'Rédaction du cahier des charges et analyse des besoins fonctionnels',
      'Modélisation de la base de données (MCD)',
      'Développement back-end complet avec PHP et MySQL',
      'Gestion des binômes étudiants et affectation des encadreurs',
      'Soutenance du projet devant le jury',
    ],
    technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'UML'],
  },
]

const education = [
  {
    title: 'BUT 3 Informatique – Développement d\'applications',
    institution: 'IUT Nord Franche-Comté',
    location: 'Belfort, France',
    period: '2025 – Présent',
    current: true,
    description: 'Formation bac+3 orientée développement logiciel avancé, IoT et intelligence artificielle. Projets réels en équipe avec méthodologies agiles.',
    highlights: [
      'Développement full-stack : Vue.js, Spring Boot, Laravel, Node.js',
      'Architecture logicielle et design patterns',
      'Gestion de projets Agile/Scrum',
      'Systèmes embarqués IoT (Arduino)',
      'Intelligence artificielle et machine learning',
      'DevOps : Docker, CI/CD, virtualisation',
    ],
    modules: ['Architecture logicielle', 'Vue.js / React', 'Spring Boot', 'Laravel', 'Machine Learning', 'IoT & Embarqué', 'Docker / DevOps', 'BDD avancées', 'Sécurité informatique'],
  },
  {
    title: 'Licence Professionnelle – Informatique de Gestion',
    institution: 'IUT de Parakou',
    location: 'Parakou, Bénin',
    period: '2021 – 2024',
    current: false,
    description: 'Formation polyvalente en développement web et mobile, gestion des bases de données et systèmes d\'information d\'entreprise.',
    highlights: [
      'Développement web (HTML, CSS, JavaScript, PHP) et mobile',
      'Conception et gestion de bases de données relationnelles',
      'Systèmes d\'information, ERP et logiciels de gestion',
      'Conduite et gestion de projets informatiques',
      'Mémoire de fin d\'études soutenu devant jury',
    ],
    modules: ['PHP / MySQL', 'JavaScript ES6+', 'Algorithmique', 'Automates', 'Réseaux', 'Systèmes d\'exploitation', 'UML / Merise', 'Gestion de projet', 'Mobile (Android)'],
  },
]

const softSkills = [
  {
    icon: '→',
    label: 'Autonomie & Initiative',
    description: 'Capable de mener des projets en totale autonomie, de la conception à la mise en production.',
  },
  {
    icon: '○',
    label: 'Travail en équipe',
    description: 'Expérience de travail en binôme et en équipe Agile/Scrum sur des projets réels.',
  },
  {
    icon: '◇',
    label: 'Curiosité intellectuelle',
    description: 'Veille technologique constante, passion pour l\'IA et les nouvelles architectures logicielles.',
  },
  {
    icon: '□',
    label: 'Adaptabilité',
    description: 'S\'adapte rapidement à de nouveaux environnements, technologies et méthodes de travail.',
  },
  {
    icon: '△',
    label: 'Résolution de problèmes',
    description: 'Approche analytique pour identifier les problématiques et proposer des solutions concrètes.',
  },
  {
    icon: '✦',
    label: 'Communication',
    description: 'À l\'aise pour présenter, rédiger des cahiers des charges et interagir avec des équipes pluridisciplinaires.',
  },
]
</script>
