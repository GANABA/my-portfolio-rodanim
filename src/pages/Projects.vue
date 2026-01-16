<template>
  <div class="min-h-screen bg-primary">
    
    <!-- Hero Section -->
    <section class="relative py-20 bg-secondary overflow-hidden">
      <div class="absolute top-10 right-20 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-10 left-20 w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
          <div class="w-2 h-2 rounded-full bg-accent-cyan animate-pulse"></div>
          <span class="text-accent-cyan text-sm font-semibold tracking-wider uppercase">Portfolio</span>
        </div>
        
        <h1 class="text-5xl md:text-6xl font-bold text-text-primary mb-6 animate-slide-in">
          Mes <span class="gradient-text">Projets</span>
        </h1>
        
        <p class="text-text-secondary text-xl max-w-3xl mx-auto animate-slide-in" style="animation-delay: 0.1s;">
          Découvrez mes réalisations en développement web, IoT, data science et machine learning
        </p>
      </div>
    </section>

    <!-- Filtres -->
    <section class="py-12 bg-primary border-b border-accent-blue/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap gap-3 justify-center fade-in-section">
          <button
            @click="selectedFilter = 'all'"
            class="px-6 py-3 rounded-lg font-medium transition-all"
            :class="selectedFilter === 'all' 
              ? 'bg-gradient-primary text-white shadow-glow-md' 
              : 'glass hover:glass-strong text-text-secondary hover:text-text-primary'"
          >
            <span class="flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              Tous les projets
              <span class="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">{{ allProjects.length }}</span>
            </span>
          </button>
          
          <button
            @click="selectedFilter = 'web'"
            class="px-6 py-3 rounded-lg font-medium transition-all"
            :class="selectedFilter === 'web' 
              ? 'bg-gradient-primary text-white shadow-glow-md' 
              : 'glass hover:glass-strong text-text-secondary hover:text-text-primary'"
          >
            <span class="flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              Web Apps
            </span>
          </button>
          
          <button
            @click="selectedFilter = 'data'"
            class="px-6 py-3 rounded-lg font-medium transition-all"
            :class="selectedFilter === 'data' 
              ? 'bg-gradient-primary text-white shadow-glow-md' 
              : 'glass hover:glass-strong text-text-secondary hover:text-text-primary'"
          >
            <span class="flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              IA & Data
            </span>
          </button>
          
          <button
            @click="selectedFilter = 'iot'"
            class="px-6 py-3 rounded-lg font-medium transition-all"
            :class="selectedFilter === 'iot' 
              ? 'bg-gradient-primary text-white shadow-glow-md' 
              : 'glass hover:glass-strong text-text-secondary hover:text-text-primary'"
          >
            <span class="flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
              IoT
            </span>
          </button>
        </div>
      </div>
    </section>

    <!-- Liste des projets -->
    <section class="py-20 bg-primary">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Compteur de projets -->
        <div class="mb-8 fade-in-section">
          <p class="text-text-secondary text-center">
            <span class="text-accent-blue font-bold text-2xl">{{ filteredProjects.length }}</span>
            <span class="ml-2">projet{{ filteredProjects.length > 1 ? 's' : '' }} trouvé{{ filteredProjects.length > 1 ? 's' : '' }}</span>
          </p>
        </div>

        <!-- Grille de projets -->
        <transition-group 
          name="list" 
          tag="div" 
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <div
            v-for="project in filteredProjects"
            :key="project.id"
            class="fade-in-section"
          >
            <ProjectCard :project="project" />
          </div>
        </transition-group>

        <!-- Message si aucun projet -->
        <div 
          v-if="filteredProjects.length === 0"
          class="text-center py-20 fade-in-section"
        >
          <div class="inline-flex items-center justify-center w-20 h-20 rounded-full glass mb-6">
            <svg class="w-10 h-10 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-text-primary mb-2">Aucun projet trouvé</h3>
          <p class="text-text-secondary mb-6">Essayez un autre filtre pour découvrir mes réalisations</p>
          <button
            @click="selectedFilter = 'all'"
            class="px-6 py-3 bg-gradient-primary text-white font-semibold rounded-lg hover:scale-105 transition-all"
          >
            Voir tous les projets
          </button>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-secondary">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-section">
        <div class="card-modern p-12">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <div class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span class="text-text-secondary text-sm font-medium">Disponible pour de nouveaux projets</span>
          </div>
          
          <h2 class="text-3xl font-bold text-text-primary mb-6">
            Une idée de projet ?
          </h2>
          <p class="text-text-secondary mb-8">
            Je serais ravi d'échanger avec vous sur vos besoins et voir comment je peux vous aider
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link 
              to="/contact"
              class="px-8 py-4 bg-gradient-primary text-white font-semibold rounded-xl hover:scale-105 transition-all hover:shadow-glow-lg"
            >
              Me contacter
            </router-link>
            <a 
              href="/CV Rodanim Ganaba.pdf" 
              download
              class="px-8 py-4 glass hover:glass-strong text-text-primary font-semibold rounded-xl border border-accent-blue/20 hover:border-accent-blue/40 transition-all inline-flex items-center justify-center gap-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Télécharger mon CV
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../data/projects.js'

const selectedFilter = ref('all')
const allProjects = ref(projects)

const filteredProjects = computed(() => {
  if (selectedFilter.value === 'all') {
    return allProjects.value
  }
  
  if (selectedFilter.value === 'web') {
    return allProjects.value.filter(p => {
      const title = p.title.toLowerCase()
      const desc = p.shortDescription.toLowerCase()
      return title.includes('web') || 
             title.includes('application') || 
             title.includes('site') || 
             title.includes('hotel') || 
             title.includes('gpfe') ||
             desc.includes('web') ||
             desc.includes('site')
    })
  }
  
  if (selectedFilter.value === 'data') {
    return allProjects.value.filter(p => {
      const title = p.title.toLowerCase()
      const desc = p.shortDescription.toLowerCase()
      return title.includes('data') || 
             title.includes('machine learning') || 
             title.includes('ia') || 
             title.includes('intelligence') || 
             title.includes('prédiction') || 
             title.includes('analyse') ||
             desc.includes('data') ||
             desc.includes('machine learning') ||
             desc.includes('ia')
    })
  }
  
  if (selectedFilter.value === 'iot') {
    return allProjects.value.filter(p => {
      const title = p.title.toLowerCase()
      const desc = p.shortDescription.toLowerCase()
      return title.includes('iot') || 
             title.includes('parking') ||
             title.includes('embarqué') ||
             desc.includes('iot') ||
             desc.includes('parking')
    })
  }
  
  return allProjects.value
})

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

<style scoped>
/* Animations pour les transitions de liste */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.list-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.list-move {
  transition: transform 0.5s ease;
}
</style>