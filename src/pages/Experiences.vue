<template>
  <div class="min-h-screen bg-primary">
    
    <!-- Hero Section -->
    <section class="relative py-20 bg-secondary overflow-hidden">
      <div class="absolute top-10 right-20 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-10 left-20 w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
          <div class="w-2 h-2 rounded-full bg-accent-purple animate-pulse"></div>
          <span class="text-accent-purple text-sm font-semibold tracking-wider uppercase">Mon Parcours</span>
        </div>
        
        <h1 class="text-5xl md:text-6xl font-bold text-text-primary mb-6 animate-slide-in">
          Expériences <span class="gradient-text">& Formation</span>
        </h1>
        
        <p class="text-text-secondary text-xl max-w-3xl mx-auto animate-slide-in" style="animation-delay: 0.1s;">
          Mon parcours académique et professionnel qui a façonné mes compétences
        </p>
      </div>
    </section>

    <!-- Expériences Professionnelles -->
    <section class="py-20 bg-primary">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="mb-16 text-center fade-in-section">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <span class="text-accent-blue text-sm font-semibold tracking-wider uppercase">Expérience Pro</span>
          </div>
          <h2 class="text-4xl font-bold text-text-primary mb-4">Expériences Professionnelles</h2>
          <p class="text-text-secondary">Stages et projets en entreprise</p>
        </div>

        <!-- Timeline -->
        <div class="relative">
          <!-- Ligne verticale centrale -->
          <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-accent-blue via-accent-purple to-transparent"></div>
          
          <div class="space-y-12">
            <div 
              v-for="(exp, index) in experiences" 
              :key="index"
              class="relative fade-in-section"
            >
              <!-- Point sur la timeline -->
              <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-primary border-4 border-primary z-10"></div>
              
              <!-- Carte expérience -->
              <div 
                class="card-modern p-8 hover:scale-[1.02] transition-all"
                :class="index % 2 === 0 ? 'md:mr-[calc(50%+3rem)]' : 'md:ml-[calc(50%+3rem)]'"
              >
                <!-- Badge période -->
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-4">
                  <svg class="w-4 h-4 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span class="text-accent-blue text-sm font-semibold">{{ exp.period }}</span>
                </div>

                <!-- Titre & entreprise -->
                <h3 class="text-2xl font-bold text-text-primary mb-2">{{ exp.title }}</h3>
                <p class="text-accent-blue font-semibold mb-4 flex items-center gap-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  {{ exp.institution }}
                </p>

                <!-- Description -->
                <p class="text-text-secondary mb-6 leading-relaxed">
                  {{ exp.description }}
                </p>

                <!-- Réalisations -->
                <div class="space-y-3">
                  <h4 class="text-sm font-semibold text-text-primary flex items-center gap-2">
                    <div class="w-1 h-4 bg-gradient-primary rounded-full"></div>
                    Réalisations clés
                  </h4>
                  <ul class="space-y-2">
                    <li 
                      v-for="highlight in exp.highlights" 
                      :key="highlight"
                      class="flex items-start gap-3 text-text-secondary text-sm"
                    >
                      <svg class="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{{ highlight }}</span>
                    </li>
                  </ul>
                </div>

                <!-- Technologies utilisées (si disponibles) -->
                <div v-if="exp.technologies" class="mt-6 flex flex-wrap gap-2">
                  <span 
                    v-for="tech in exp.technologies" 
                    :key="tech"
                    class="px-3 py-1 glass text-xs font-medium text-text-primary rounded-lg"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Formation Académique -->
    <section class="py-20 bg-secondary">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="mb-16 text-center fade-in-section">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <span class="text-accent-purple text-sm font-semibold tracking-wider uppercase">Cursus</span>
          </div>
          <h2 class="text-4xl font-bold text-text-primary mb-4">Formation Académique</h2>
          <p class="text-text-secondary">Mon parcours universitaire</p>
        </div>

        <!-- Timeline formation -->
        <div class="relative">
          <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-accent-purple via-accent-blue to-transparent"></div>
          
          <div class="space-y-12">
            <div 
              v-for="(edu, index) in education" 
              :key="index"
              class="relative fade-in-section"
            >
              <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-accent-purple to-accent-blue border-4 border-secondary z-10"></div>
              
              <div 
                class="card-modern p-8 hover:scale-[1.02] transition-all"
                :class="index % 2 === 0 ? 'md:mr-[calc(50%+3rem)]' : 'md:ml-[calc(50%+3rem)]'"
              >
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-4">
                  <svg class="w-4 h-4 text-accent-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                  <span class="text-accent-purple text-sm font-semibold">{{ edu.period }}</span>
                </div>

                <h3 class="text-2xl font-bold text-text-primary mb-2">{{ edu.title }}</h3>
                <p class="text-accent-purple font-semibold mb-4 flex items-center gap-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  {{ edu.institution }}
                </p>

                <p class="text-text-secondary mb-6 leading-relaxed">
                  {{ edu.description }}
                </p>

                <div class="space-y-3">
                  <h4 class="text-sm font-semibold text-text-primary flex items-center gap-2">
                    <div class="w-1 h-4 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full"></div>
                    Compétences acquises
                  </h4>
                  <ul class="space-y-2">
                    <li 
                      v-for="highlight in edu.highlights" 
                      :key="highlight"
                      class="flex items-start gap-3 text-text-secondary text-sm"
                    >
                      <svg class="w-5 h-5 text-accent-purple flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{{ highlight }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-primary">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-section">
        <div class="card-modern p-12">
          <h2 class="text-3xl font-bold text-text-primary mb-6">
            Envie d'en savoir plus ?
          </h2>
          <p class="text-text-secondary mb-8">
            Téléchargez mon CV complet ou contactez-moi pour échanger
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/CV Rodanim Ganaba.pdf" 
              download
              class="px-8 py-4 bg-gradient-primary text-white font-semibold rounded-xl hover:scale-105 transition-all hover:shadow-glow-lg inline-flex items-center justify-center gap-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Télécharger mon CV
            </a>
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

const experiences = [
  {
    title: 'Stage Développeur Web',
    institution: 'Light Innovation',
    period: 'Novembre 2024 - Février 2025',
    description: 'Développement d\'une application web complète de réservation de chambres d\'hôtel avec interface client et panneau d\'administration.',
    highlights: [
      'Analyse des besoins clients et conception de l\'architecture',
      'Développement front-end avec HTML, CSS, Bootstrap, JavaScript',
      'Implémentation back-end avec PHP et MySQL',
      'Gestion des réservations en temps réel et système d\'avis clients'
    ],
    technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'HTML/CSS']
  },
  {
    title: 'Stage académique - Développement logiciel',
    institution: 'CABRO GROUP SARL',
    period: 'Avril 2024 - Juillet 2024',
    description: 'Développement en binôme d\'une application web de gestion de projets de fin d\'études pour un établissement universitaire.',
    highlights: [
      'Rédaction du cahier des charges et analyse des besoins',
      'Modélisation de la base de données',
      'Implémentation back-end de l\'application',
      'Gestion des binômes et affectation des encadreurs'
    ],
    technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap']
  },
]

const education = [
  {
    title: 'BUT 3 Informatique - Développement d\'applications',
    institution: 'IUT Nord Franche-Comté',
    period: '2025 - Présent',
    description: 'Formation approfondie en développement d\'applications avec focus sur les méthodologies agiles, l\'IoT et l\'intelligence artificielle.',
    highlights: [
      'Développement full-stack (front-end et back-end)',
      'Gestion de projets avec méthodologies Agile/Scrum',
      'IoT et systèmes embarqués',
      'Techniques d\'Intelligence Artificielle et Machine Learning',
      'Réseaux, virtualisation et DevOps'
    ]
  },
  {
    title: 'Licence Professionnelle - Informatique de Gestion',
    institution: 'IUT de Parakou',
    period: '2021 - 2024',
    description: 'Formation axée sur le développement web/mobile, la gestion de bases de données et les systèmes d\'information d\'entreprise.',
    highlights: [
      'Développement web et mobile',
      'Conception et gestion de bases de données',
      'Systèmes d\'information et ERP',
      'Gestion de projets informatiques',
      'Stage de fin d\'études avec soutenance'
    ]
  },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
  )

  document.querySelectorAll('.fade-in-section').forEach((el) => observer.observe(el))
})
</script>