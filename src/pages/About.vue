<template>
  <div class="min-h-screen bg-primary">
    
    <!-- Hero Section -->
    <section class="relative py-20 bg-secondary overflow-hidden">
      <div class="absolute top-10 right-20 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-10 left-20 w-80 h-80 bg-accent-purple/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
          <div class="w-2 h-2 rounded-full bg-accent-blue animate-pulse"></div>
          <span class="text-accent-blue text-sm font-semibold tracking-wider uppercase">Découvrez mon profil</span>
        </div>
        
        <h1 class="text-5xl md:text-6xl font-bold text-text-primary mb-6 animate-slide-in">
          À propos <span class="gradient-text">de moi</span>
        </h1>
        
        <p class="text-text-secondary text-xl max-w-3xl mx-auto animate-slide-in" style="animation-delay: 0.1s;">
          Mon parcours, mes compétences et ma vision du développement
        </p>
      </div>
    </section>

    <!-- Qui suis-je Section -->
    <section class="py-20 bg-primary">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="card-modern p-10 hover:scale-[1.01] transition-all fade-in-section">
          <div class="flex items-start gap-4 mb-6">
            <div class="text-5xl">👋</div>
            <div>
              <h2 class="text-3xl md:text-4xl font-bold gradient-text mb-4">
                Qui suis-je ?
              </h2>
            </div>
          </div>
          
          <div class="space-y-6 text-text-secondary text-lg leading-relaxed">
            <p>
              Bonjour ! Je suis <strong class="text-text-primary font-bold">Rodanim Ganaba</strong>, étudiant en BUT Informatique.
              J'explore activement le développement informatique, le machine learning et la data science à travers divers projets et formations.
            </p>
            <p>
              J'aime relever de nouveaux défis techniques pour progresser constamment et créer des solutions utiles et innovantes.
            </p>
            <p>
              En dehors du code, j'apprécie le travail d'équipe, les jeux d'équipe football particulièrement, le partage de connaissances et la résolution de problèmes complexes.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Compétences aperçu -->
    <section class="py-20 bg-secondary">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center mb-12 fade-in-section">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <span class="text-accent-blue text-sm font-semibold tracking-wider uppercase">Stack Technique</span>
          </div>
          <h2 class="text-4xl font-bold text-text-primary mb-4">Compétences principales</h2>
          <p class="text-text-secondary">Technologies que je maîtrise</p>
        </div>

        <!-- Langages -->
        <div class="mb-12 fade-in-section">
          <h3 class="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
            <span class="w-2 h-8 bg-accent rounded-full"></span>
            Langages de développement
          </h3>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div 
              v-for="(lang, index) in languages" 
              :key="lang.name"
              class="group card-modern text-center p-6 cursor-pointer"
              :style="{ animationDelay: `${index * 50}ms` }"
            >
              <div class="mb-3 flex justify-center transform group-hover:scale-125 transition-all">
                <img :src="lang.icon" :alt="lang.name" class="w-12 h-12" />
              </div>
              <span class="text-text-primary font-semibold text-sm block">{{ lang.name }}</span>
            </div>
          </div>
        </div>

        <!-- Frameworks -->
        <div class="mb-12 fade-in-section">
          <h3 class="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
            <span class="w-2 h-8 bg-accent rounded-full"></span>
            Frameworks
          </h3>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div 
              v-for="(framework, index) in frameworks" 
              :key="framework.name"
              class="group card-modern text-center p-6 cursor-pointer"
              :style="{ animationDelay: `${index * 50}ms` }"
            >
              <div class="mb-3 flex justify-center transform group-hover:scale-125 transition-all">
                <img :src="framework.icon" :alt="framework.name" class="w-12 h-12" />
              </div>
              <span class="text-text-primary font-medium text-sm">{{ framework.name }}</span>
            </div>
          </div>
        </div>

        <!-- Outils -->
        <div class="mb-12 fade-in-section">
          <h3 class="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
            <span class="w-2 h-8 bg-accent rounded-full"></span>
            Outils & Technologies
          </h3>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div 
              v-for="(tool, index) in tools" 
              :key="tool.name"
              class="group card-modern text-center p-6 cursor-pointer"
              :style="{ animationDelay: `${index * 50}ms` }"
            >
              <div class="mb-3 flex justify-center transform group-hover:scale-125 transition-all">
                <img :src="tool.icon" :alt="tool.name" class="w-12 h-12" />
              </div>
              <span class="text-text-primary font-medium text-sm">{{ tool.name }}</span>
            </div>
          </div>
        </div>

        <!-- Data -->
        <div class="fade-in-section">
          <h3 class="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
            <span class="w-2 h-8 bg-accent rounded-full"></span>
            Data & Bases de Données
          </h3>
          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <div 
              v-for="(tool, index) in dataTools" 
              :key="tool.name"
              class="group card-modern text-center p-6 cursor-pointer"
              :style="{ animationDelay: `${index * 50}ms` }"
            >
              <div class="mb-3 flex justify-center transform group-hover:scale-125 transition-all">
                <img :src="tool.icon" :alt="tool.name" class="w-12 h-12" />
              </div>
              <span class="text-text-primary font-medium text-sm">{{ tool.name }}</span>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="text-center mt-12 fade-in-section">
          <router-link 
            to="/skills"
            class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-white font-semibold rounded-xl hover:scale-105 transition-all hover:shadow-glow-lg"
          >
            Voir toutes mes compétences
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Expériences Mini -->
    <section class="py-20 bg-primary">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center mb-12 fade-in-section">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <span class="text-accent-purple text-sm font-semibold tracking-wider uppercase">Parcours</span>
          </div>
          <h2 class="text-4xl font-bold text-text-primary mb-4">Expériences professionnelles</h2>
          <p class="text-text-secondary">Stages et projets académiques</p>
        </div>

        <div class="grid md:grid-cols-2 gap-6 fade-in-section">
          <div 
            v-for="exp in timelineExpe" 
            :key="exp.title"
            class="card-modern p-6"
          >
            <div class="flex items-start gap-3 mb-4">
              <div class="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-text-primary mb-1">{{ exp.title }}</h3>
                <p class="text-accent-blue text-sm font-semibold mb-1">{{ exp.institution }}</p>
                <p class="text-text-muted text-xs mb-3">{{ exp.period }}</p>
                <p class="text-text-secondary text-sm mb-3">{{ exp.description }}</p>
                <ul class="space-y-1">
                  <li 
                    v-for="highlight in exp.highlights" 
                    :key="highlight"
                    class="text-text-secondary text-xs flex items-start gap-2"
                  >
                    <svg class="w-4 h-4 text-accent-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{{ highlight }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="text-center mt-12 fade-in-section">
          <router-link 
            to="/experiences"
            class="inline-flex items-center gap-2 px-8 py-4 glass hover:glass-strong text-text-primary font-semibold rounded-xl border border-accent-blue/20 hover:border-accent-blue/40 transition-all hover:scale-105"
          >
            Voir mon parcours complet
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Formation Mini -->
    <section class="py-20 bg-secondary">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center mb-12 fade-in-section">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <span class="text-accent-purple text-sm font-semibold tracking-wider uppercase">Études</span>
          </div>
          <h2 class="text-4xl font-bold text-text-primary mb-4">Formation académique</h2>
          <p class="text-text-secondary">Mon cursus universitaire</p>
        </div>

        <div class="space-y-6 fade-in-section">
          <div 
            v-for="edu in timeline" 
            :key="edu.title"
            class="card-modern p-6"
          >
            <div class="flex items-start gap-3">
              <div class="w-10 h-10 rounded-lg bg-gradient-to-r from-accent-purple to-accent-blue flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-text-primary mb-1">{{ edu.title }}</h3>
                <p class="text-accent-purple text-sm font-semibold mb-1">{{ edu.institution }}</p>
                <p class="text-text-muted text-xs mb-3">{{ edu.period }}</p>
                <p class="text-text-secondary text-sm mb-3">{{ edu.description }}</p>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="highlight in edu.highlights" 
                    :key="highlight"
                    class="px-3 py-1 glass text-xs text-text-primary rounded-lg"
                  >
                    {{ highlight }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="py-20 bg-primary">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-section">
        <div class="card-modern p-12">
          <h2 class="text-3xl font-bold text-text-primary mb-6">
            Prêt à collaborer ?
          </h2>
          <p class="text-text-secondary mb-8">
            Découvrez mes projets ou contactez-moi pour discuter d'opportunités
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link 
              to="/projects"
              class="px-8 py-4 bg-gradient-primary text-white font-semibold rounded-xl hover:scale-105 transition-all hover:shadow-glow-lg"
            >
              Voir mes projets
            </router-link>
            <router-link 
              to="/contact"
              class="px-8 py-4 glass hover:glass-strong text-text-primary font-semibold rounded-xl border border-accent-blue/20 hover:border-accent-blue/40 transition-all"
            >
              Me contacter
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const languages = [
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'},
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'},
  { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'},
  { name: 'HTML/CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'},
  { name: 'Javascript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'},
]

const frameworks = [
  { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
  { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
]

const tools = [
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'IntelliJ', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg' },
  { name: 'SpringToolSuite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
  { name: 'Git/GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitLab', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' },
  { name: 'Jupyter Notebook', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Trello', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg' },
];

const dataTools = [
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
]

const timelineExpe = [
  {
    title: 'Stage Développeur Web',
    institution: 'Light Innovation',
    period: 'Novembre 2024 - Février 2025',
    description: 'Développement d\'une application web de réservation de chambre d\'hôtel',
    highlights: [
      'Analyse des besoins clients',
      'Développement front-end avec HTML, CSS, Bootstrap, JavaScript',
      'Implémentation back-end avec PHP et MySQL',
    ]
  },
  {
    title: 'Stage académique - Développement',
    institution: 'CABRO GROUP SARL',
    period: 'Avril 2024 - Juillet 2024',
    description: 'Développement en binôme d\'une application web de gestion de projets de fin d\'étude',
    highlights: [
      'Rédaction du cahier des charges',
      'Modelisation de la base de données',
      'Implémentation back-end de l\'application'
    ]
  },
]

const timeline = [
  {
    title: 'BUT 3 Informatique - Développement d\'applications',
    institution: 'IUT Nord Franche-Comté',
    period: '2025 - Présent',
    description: 'Formation en développement d\'applications, méthodes agiles, réseaux et virtualisation, bases de données, IoT et technique d\'IA.',
    highlights: [
      'Développement front-end et back-end',
      'Gestion de projets agiles',
      'IoT et techniques d\'IA',
    ]
  },
  {
    title: 'Licence Professionnelle - Informatique de Gestion',
    institution: 'IUT de Parakou',
    period: '2021 - 2024',
    description: 'Formation axée sur le développement web/mobile, la gestion de bases de données et les systèmes d\'information.',
    highlights: [
      'Développement web et mobile',
      'Gestion de bases de données',
      'Systèmes d\'information',
    ]
  },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
  )

  document.querySelectorAll('.fade-in-section').forEach(el => {
    observer.observe(el)
  })
})
</script>