<template>
  <div class="bg-dark">
    <!-- Hero Section avec formes géométriques -->
    <section class="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-dark">
      <!-- Formes géométriques animées en arrière-plan -->
      <div class="absolute top-10 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-10 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse"
        style="animation-delay: 1s;"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 text-center">
        <span class="text-accent font-semibold tracking-wider uppercase text-sm">Portfolio</span>
        <h1 class="text-5xl md:text-6xl font-bold text-white mt-4 mb-6 fade-in-up">
          Mes Projets
        </h1>
        <p class="text-gray-400 text-xl max-w-2xl mx-auto fade-in-up" style="animation-delay: 0.2s;">
          Découvrez l'ensemble de mes réalisations en développement web et data
        </p>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>

    <!-- Section Filtres et Projets -->
    <section class="py-20 bg-gray-dark">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Filtres par technologie -->
        <div class="mb-12 scroll-fade-in">
          <div class="flex flex-wrap justify-center gap-3">
            <button @click="selectedFilter = 'all'" :class="[
              'group relative px-8 py-3 rounded-xl font-bold transition-all overflow-hidden',
              selectedFilter === 'all'
                ? 'bg-accent text-dark scale-105'
                : 'bg-dark text-accent border-2 border-accent/30 hover:border-accent/60 hover:scale-105'
            ]">
              <span class="relative z-10 flex items-center gap-2">
                <span>Tous</span>
                <span
                  class="px-2 py-0.5 rounded-full text-xs font-bold"
                  :class="selectedFilter === 'all' ? 'bg-dark/20 text-dark' : 'bg-accent/10 text-accent'">
                  {{ projects.length }}
                </span>
              </span>
              <!-- Glow effect for inactive buttons -->
              <div v-if="selectedFilter !== 'all'"
                class="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity">
              </div>
            </button>

            <button v-for="tech in allTechnologies" :key="tech" @click="selectedFilter = tech" :class="[
              'group relative px-8 py-3 rounded-xl font-bold transition-all overflow-hidden',
              selectedFilter === tech
                ? 'bg-accent text-dark scale-105'
                : 'bg-dark text-accent border-2 border-accent/30 hover:border-accent/60 hover:scale-105'
            ]">
              <span class="relative z-10">{{ tech }}</span>
              <!-- Glow effect for inactive buttons -->
              <div v-if="selectedFilter !== tech"
                class="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity">
              </div>
            </button>
          </div>
        </div>

        <!-- Compteur de projets filtrés -->
        <div class="text-center mb-12 scroll-fade-in" style="animation-delay: 0.1s;">
          <div class="inline-flex items-center gap-3 bg-dark border border-accent/30 rounded-full px-6 py-3">
            <div class="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <p class="text-gray-300">
              <span class="font-bold text-accent text-xl">{{ filteredProjects.length }}</span>
              <span class="text-white ml-2">
                projet{{ filteredProjects.length > 1 ? 's' : '' }} trouvé{{ filteredProjects.length > 1 ? 's' : '' }}
              </span>
            </p>
          </div>
        </div>

        <!-- Grille de projets -->
        <div v-if="filteredProjects.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(project, index) in filteredProjects" 
            :key="`${selectedFilter}-${project.id}`" 
            class="project-card-wrapper"
            :style="{ animationDelay: `${index * 0.1}s` }">
            <ProjectCard :project="project" />
          </div>
        </div>

        <!-- Message si aucun projet -->
        <div v-else class="text-center py-20 scroll-fade-in">
          <div
            class="relative max-w-md mx-auto bg-dark border border-accent/20 rounded-2xl p-12 hover:border-accent/50 transition-all overflow-hidden group">
            <!-- Glow effect -->
            <div
              class="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500">
            </div>

            <div class="relative z-10">
              <div class="text-7xl mb-6 animate-bounce-slow">🔍</div>
              <h3 class="text-2xl font-bold text-white mb-3">Aucun projet trouvé</h3>
              <p class="text-gray-400 text-lg mb-6">
                Aucun projet n'utilise cette technologie pour le moment
              </p>
              <button @click="selectedFilter = 'all'"
                class="inline-flex items-center px-6 py-3 bg-accent text-dark font-bold rounded-lg hover:scale-105 transition-all hover:shadow-lg hover:shadow-accent/50">
                Voir tous les projets
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-20 bg-dark relative overflow-hidden scroll-fade-in">
      <!-- Formes décoratives -->
      <div class="absolute top-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          Un projet en tête ?
        </h2>
        <p class="text-accent text-xl font-semibold mb-10">
          Discutons de votre prochaine idée !
        </p>

        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <router-link to="/contact"
            class="group relative inline-flex items-center justify-center px-10 py-5 bg-accent text-dark font-bold rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-xl">
            <span class="relative z-10 flex items-center">
              Me contacter
              <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </router-link>

          <a href="/public/CV Rodanim Ganaba.pdf" download
            class="inline-flex items-center justify-center px-10 py-5 border-2 border-accent text-accent font-bold rounded-lg hover:bg-accent hover:text-dark transition-all hover:scale-105">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Télécharger CV
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../data/projects.js'

const selectedFilter = ref('all')

// Récupérer toutes les technologies uniques
const allTechnologies = computed(() => {
  const techSet = new Set()
  projects.forEach(project => {
    project.technologies.forEach(tech => techSet.add(tech))
  })
  return Array.from(techSet).sort()
})

// Filtrer les projets selon la technologie sélectionnée
const filteredProjects = computed(() => {
  if (selectedFilter.value === 'all') {
    return projects
  }
  return projects.filter(project =>
    project.technologies.includes(selectedFilter.value)
  )
})

// Animation au scroll avec réobservation après filtrage
let observer = null

const setupScrollAnimation = () => {
  if (observer) {
    observer.disconnect()
  }

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, observerOptions)

  // Observer tous les éléments scroll-fade-in ET les cards
  document.querySelectorAll('.scroll-fade-in, .project-card-wrapper').forEach(el => {
    observer.observe(el)
  })
}

onMounted(() => {
  setupScrollAnimation()
})

// Réobserver quand les projets filtrés changent
watch(filteredProjects, () => {
  // Petit délai pour laisser le DOM se mettre à jour
  setTimeout(() => {
    setupScrollAnimation()
  }, 50)
})
</script>

<style scoped>
/* Animations d'entrée */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

/* Animation des cards */
.project-card-wrapper {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.6s ease-out forwards;
}

/* Animation au scroll */
.scroll-fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.scroll-fade-in.visible,
.project-card-wrapper.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Bounce lent */
@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-bounce-slow {
  animation: bounce-slow 3s ease-in-out infinite;
}
</style>