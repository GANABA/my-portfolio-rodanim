<template>
  <div class="bg-dark min-h-screen">
    <!-- Hero Section avec image du projet -->
    <section class="relative h-[60vh] flex items-end overflow-hidden bg-dark">
      <!-- Image de fond avec overlay -->
      <div class="absolute inset-0">
        <img v-if="project?.image" :src="project.image" :alt="project.title"
          class="w-full h-full object-cover opacity-30">
        <div v-else
          class="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent/20 to-dark opacity-50">
          <span class="text-accent text-9xl font-bold">{{ project?.title.charAt(0) }}</span>
        </div>
        <!-- Gradient overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent"></div>
      </div>

      <!-- Formes géométriques animées -->
      <div class="absolute top-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 left-10 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse"
        style="animation-delay: 1s;"></div>

      <!-- Contenu du hero -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 relative z-10 w-full">
        <!-- Bouton retour -->
        <router-link to="/projects"
          class="inline-flex items-center text-accent hover:text-white transition-all mb-8 font-semibold text-lg hover:gap-3 group">
          <svg class="w-6 h-6 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Retour aux projets
        </router-link>

        <div v-if="project" class="fade-in-up">
          <!-- Titre -->
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-4">
            {{ project.title }}
          </h1>

          <!-- Technologies -->
          <div class="flex flex-wrap gap-2 mb-4">
            <span v-for="tech in project.technologies" :key="tech"
              class="px-4 py-2 bg-dark border border-accent/30 text-accent text-sm font-bold rounded-full backdrop-blur-sm">
              {{ tech }}
            </span>
          </div>
          <!-- Description courte -->
          <p class="text-xl text-gray-300 max-w-3xl leading-relaxed">
            {{ project.shortDescription }}
          </p>
        </div>
      </div>
    </section>

    <!-- Contenu principal -->
    <section v-if="project" class="py-20 bg-gray-dark">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Liens GitHub et Live -->
        <div class="flex flex-col sm:flex-row gap-4 mb-12 scroll-fade-in">
          <a v-if="project.githubLink" :href="project.githubLink" target="_blank" rel="noopener noreferrer"
            class="group relative inline-flex items-center justify-center px-8 py-4 bg-dark border-2 border-gray-dark text-white font-bold rounded-xl hover:border-accent/50 hover:scale-105 transition-all overflow-hidden w-full sm:w-auto">
            <div
              class="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500">
            </div>
            <svg class="w-6 h-6 mr-3 relative z-10" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span class="relative z-10">Lien GitHub</span>
          </a>

          <a v-if="project.liveLink" :href="project.liveLink" target="_blank" rel="noopener noreferrer"
            class="group relative inline-flex items-center justify-center px-8 py-4 bg-accent text-dark font-bold rounded-xl hover:scale-105 transition-all overflow-hidden w-full sm:w-auto">
            <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Voir en ligne
          </a>
        </div>

        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Contenu principal (2/3) -->
          <div class="lg:col-span-2 space-y-12">

            <!-- Description complète -->
            <div
              class="relative bg-dark border border-accent/20 rounded-2xl p-8 md:p-10 hover:border-accent/50 transition-all duration-500 group overflow-hidden scroll-fade-in">
              <div
                class="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500">
              </div>

              <div class="relative z-10">
                <h2 class="text-3xl font-bold text-accent mb-6 flex items-center gap-3">
                  Description
                </h2>
                <div class="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                  {{ project.fullDescription }}
                </div>
              </div>
            </div>

            <!-- Contexte -->
            <div v-if="project.context"
              class="relative bg-dark border border-accent/20 rounded-2xl p-8 md:p-10 hover:border-accent/50 transition-all duration-500 group overflow-hidden scroll-fade-in">
              <div
                class="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500">
              </div>

              <div class="relative z-10">
                <h2 class="text-3xl font-bold text-accent mb-6 flex items-center gap-3">
                  Contexte
                </h2>
                <p class="text-gray-300 text-lg leading-relaxed">{{ project.context }}</p>
              </div>
            </div>

            <!-- Fonctionnalités -->
            <div v-if="project.features && project.features.length > 0"
              class="relative bg-dark border border-accent/20 rounded-2xl p-8 md:p-10 hover:border-accent/50 transition-all duration-500 group overflow-hidden scroll-fade-in">
              <div
                class="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500">
              </div>

              <div class="relative z-10">
                <h2 class="text-3xl font-bold text-accent mb-6 flex items-center gap-3">
                  Fonctionnalités principales
                </h2>
                <ul class="space-y-3">
                  <li v-for="(feature, index) in project.features" :key="index"
                    class="flex items-start text-gray-300 text-lg hover:text-accent transition-colors">
                    <svg class="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd" />
                    </svg>
                    {{ feature }}
                  </li>
                </ul>
              </div>
            </div>

          </div>

          <!-- Sidebar (1/3) -->
          <div class="space-y-6">

            <!-- Objectifs -->
            <div v-if="project.objectives && project.objectives.length > 0"
              class="relative bg-dark border border-accent/20 rounded-2xl p-6 hover:border-accent/50 transition-all duration-500 group overflow-hidden scroll-fade-in">
              <div
                class="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500">
              </div>

              <div class="relative z-10">
                <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  Objectifs
                </h3>
                <ul class="space-y-3">
                  <li v-for="(objective, index) in project.objectives" :key="index"
                    class="flex items-start text-gray-300 hover:text-accent transition-colors">
                    <span class="text-accent mr-2 font-bold">•</span>
                    {{ objective }}
                  </li>
                </ul>
              </div>
            </div>

            <!-- Technologies utilisées (card détaillée) -->
            <div
              class="relative bg-dark border border-accent/20 rounded-2xl p-6 hover:border-accent/50 transition-all duration-500 group overflow-hidden scroll-fade-in">
              <div
                class="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500">
              </div>

              <div class="relative z-10">
                <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  Technologies
                </h3>
                <div class="space-y-2">
                  <span v-for="tech in project.technologies" :key="tech"
                    class="block px-4 py-3 bg-gray-dark border border-accent/30 text-accent text-center font-semibold rounded-lg hover:bg-accent/10 hover:scale-105 transition-all">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Call to action -->
            <div
              class="relative bg-gradient-to-br from-accent/20 to-accent/5 border-2 border-accent/30 rounded-2xl p-6 overflow-hidden scroll-fade-in">
              <div class="absolute inset-0 bg-accent/10 animate-pulse"></div>

              <div class="relative z-10">
                <h3 class="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  Un projet similaire ?
                </h3>
                <p class="text-gray-300 text-sm mb-4">
                  Discutons de votre idée et créons quelque chose d'incroyable ensemble !
                </p>
                <router-link to="/contact"
                  class="block text-center px-6 py-3 bg-accent text-dark font-bold rounded-lg hover:scale-105 transition-all">
                  Me contacter
                </router-link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>

    <!-- Message si projet non trouvé -->
    <section v-else class="py-20 bg-gray-dark">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="relative bg-dark border border-accent/20 rounded-2xl p-12 text-center hover:border-accent/50 transition-all overflow-hidden group">
          <div
            class="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500">
          </div>

          <div class="relative z-10">
            <div class="text-7xl mb-6 animate-bounce-slow">❌</div>
            <h2 class="text-3xl font-bold text-white mb-4">Projet non trouvé</h2>
            <p class="text-gray-400 text-lg mb-8">
              Le projet que vous recherchez n'existe pas ou a été supprimé.
            </p>
            <router-link to="/projects"
              class="inline-flex items-center px-8 py-4 bg-accent text-dark font-bold rounded-lg hover:scale-105 transition-all">
              Voir tous les projets
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
import { useRoute } from 'vue-router'
import { projects } from '../data/projects.js'

const route = useRoute()

// Récupérer le projet selon l'ID dans l'URL
const project = computed(() => {
  const projectId = parseInt(route.params.id)
  return projects.find(p => p.id === projectId)
})

// Animation au scroll
onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, observerOptions)

  document.querySelectorAll('.scroll-fade-in').forEach(el => {
    observer.observe(el)
  })
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
}

/* Animation au scroll */
.scroll-fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.scroll-fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Bounce lent */
@keyframes bounce-slow {

  0%,
  100% {
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