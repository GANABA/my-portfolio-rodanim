<template>
  <div class="bg-primary">
    <!-- Hero Section -->
    <Hero />

    <!-- Quick About Section -->
    <section class="py-20 bg-secondary relative overflow-hidden">
      <!-- Decorative elements -->
      <div class="absolute top-0 left-0 w-72 h-72 bg-accent-blue/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-4xl mx-auto">
          
          <SectionHeader 
            badge="À propos"
            title="Qui suis-je ?"
            subtitle="Découvrez mon parcours et mes ambitions"
          />

          <div class="grid md:grid-cols-2 gap-8 items-center fade-in-section">
            <!-- Left - Text -->
            <div class="space-y-6 text-text-secondary leading-relaxed">
              <p class="text-lg">
                Étudiant en <span class="text-accent-blue font-semibold">BUT 3 Informatique</span> à l'IUT Nord Franche-Comté, 
                j'explore activement le développement d'applications, l'IoT, et la Data Science.
              </p>
              <p>
                Passionné par les nouvelles technologies, j'aime <span class="text-text-primary font-medium">relever de nouveaux défis techniques</span> 
                pour progresser constamment et créer des solutions innovantes.
              </p>
              <p class="text-sm text-text-muted">
                Au-delà du code, j'apprécie le travail d'équipe, le football et le partage de connaissances.
              </p>
            </div>

            <!-- Right - Stats cards -->
            <div class="grid grid-cols-2 gap-4">
              <div class="card-modern text-center p-6">
                <div class="text-4xl font-bold gradient-text mb-2">5+</div>
                <div class="text-text-muted text-sm">Projets réalisés</div>
              </div>
              <div class="card-modern text-center p-6">
                <div class="text-4xl font-bold gradient-text mb-2">7+</div>
                <div class="text-text-muted text-sm">Technologies</div>
              </div>
              <div class="card-modern text-center p-6">
                <div class="text-4xl font-bold gradient-text mb-2">3+</div>
                <div class="text-text-muted text-sm">Années d'études</div>
              </div>
              <div class="card-modern text-center p-6">
                <div class="text-4xl font-bold gradient-text mb-2">2</div>
                <div class="text-text-muted text-sm">Stages pros</div>
              </div>
            </div>
          </div>

          <!-- CTA -->
          <div class="text-center mt-12 fade-in-section">
            <router-link 
              to="/about"
              class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-white font-semibold rounded-xl hover:scale-105 transition-all hover:shadow-glow-lg"
            >
              En savoir plus sur moi
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Preview Section -->
    <section class="py-20 bg-primary relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader 
          badge="Stack Technique"
          title="Compétences"
          subtitle="Technologies et outils que j'utilise au quotidien"
        />

        <!-- Skills Grid -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 fade-in-section">
          <div 
            v-for="(skill, index) in skillsPreview" 
            :key="skill.name"
            class="group card-modern text-center p-6 cursor-pointer"
            :style="{ animationDelay: `${index * 50}ms` }"
          >
            <div class="mb-4 flex justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all">
              <img :src="skill.icon" :alt="skill.name" class="w-16 h-16" />
            </div>
            <span class="text-text-primary font-medium text-sm">{{ skill.name }}</span>
          </div>
        </div>

        <!-- CTA to skills page -->
        <div class="text-center mt-12 fade-in-section">
          <router-link 
            to="/skills"
            class="inline-flex items-center gap-2 px-8 py-4 glass hover:glass-strong text-text-primary font-semibold rounded-xl border border-accent-blue/20 hover:border-accent-blue/40 transition-all hover:scale-105"
          >
            Voir toutes mes compétences
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Featured Projects Section -->
    <section class="py-20 bg-secondary relative overflow-hidden">
      <div class="absolute top-1/2 left-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader 
          badge="Portfolio"
          title="Projets"
          subtitle="Découvrez mes réalisations les plus abouties"
        />

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 fade-in-section">
          <ProjectCard 
            v-for="project in featuredProjects" 
            :key="project.id" 
            :project="project" 
          />
        </div>

        <!-- CTA -->
        <div class="text-center fade-in-section">
          <router-link 
            to="/projects"
            class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-white font-semibold rounded-xl hover:scale-105 transition-all hover:shadow-glow-lg"
          >
            Voir tous les projets
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Contact CTA Section -->
    <section class="py-20 bg-primary relative overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.1),transparent_70%)]"></div>
      
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div class="card-modern p-12 fade-in-section">
          
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <div class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span class="text-text-secondary text-sm font-medium">Disponible pour de nouvelles opportunités</span>
          </div>

          <h2 class="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Travaillons ensemble !
          </h2>
          
          <p class="text-xl text-text-secondary mb-10 max-w-2xl mx-auto">
            Un projet en tête ? Une question ? N'hésitez pas à me contacter, je serai ravi d'échanger avec vous.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="mailto:ganabarodanimkm@gmail.com"
              class="group px-8 py-4 bg-gradient-primary text-white font-semibold rounded-xl hover:scale-105 transition-all hover:shadow-glow-lg inline-flex items-center gap-2"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              Envoyer un email
            </a>

            <router-link 
              to="/contact"
              class="px-8 py-4 glass hover:glass-strong text-text-primary font-semibold rounded-xl border border-accent-blue/20 hover:border-accent-blue/40 transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              Formulaire de contact
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import Hero from '../components/Hero.vue'
import SectionHeader from '../components/SectionHeader.vue'
import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../data/projects.js'

// Projets en vedette
const featuredProjects = computed(() => {
  return projects.filter(p => p.featured).slice(0, 3)
})

// Aperçu des compétences (6 principales)
const skillsPreview = [
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
]

// Animation au scroll
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    }
  )

  document.querySelectorAll('.fade-in-section').forEach((el) => {
    observer.observe(el)
  })
})
</script>