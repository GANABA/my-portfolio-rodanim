<template>
  <div class="min-h-screen bg-primary" v-if="project">

    <!-- Hero Section SANS image background -->
    <section class="relative py-20 bg-secondary overflow-hidden">
      <!-- Decorative elements -->
      <div class="absolute top-10 right-20 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-10 left-20 w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl animate-pulse"
        style="animation-delay: 1s;"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- Breadcrumb -->
        <div class="mb-8 fade-in-section">
          <nav class="flex items-center gap-2 text-sm">
            <router-link to="/" class="text-text-muted hover:text-accent-blue transition-colors">
              Accueil
            </router-link>
            <svg class="w-4 h-4 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
            <router-link to="/projects" class="text-text-muted hover:text-accent-blue transition-colors">
              Projets
            </router-link>
            <svg class="w-4 h-4 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
            <span class="text-accent-blue">{{ project.title }}</span>
          </nav>
        </div>

        <!-- Titre et badges -->
        <div class="text-center mb-8 fade-in-section">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
            {{ project.title }}
          </h1>

          <p class="text-xl text-text-secondary max-w-3xl mx-auto mb-6">
            {{ project.shortDescription }}
          </p>

          <!-- Technologies badges -->
          <div class="flex flex-wrap gap-2 justify-center mb-8">
            <span v-for="tech in project.technologies" :key="tech"
              class="px-3 py-1 glass text-sm font-medium text-text-primary rounded-lg">
              {{ tech }}
            </span>
          </div>

          <!-- Liens d'action -->
          <div class="flex flex-wrap gap-4 justify-center">
            <a v-if="project.githubLink" :href="project.githubLink" target="_blank" rel="noopener noreferrer"
              class="px-6 py-3 glass hover:glass-strong text-text-primary font-semibold rounded-xl border border-accent-blue/20 hover:border-accent-blue/40 transition-all hover:scale-105 inline-flex items-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Voir le code
            </a>

            <a v-if="project.liveLink && !isPortfolioProject" :href="project.liveLink" target="_blank"
              rel="noopener noreferrer"
              class="px-6 py-3 bg-gradient-primary text-white font-semibold rounded-xl hover:scale-105 transition-all hover:shadow-glow-lg inline-flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Voir la démo
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contenu principal -->
    <section class="py-20 bg-primary">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-3 gap-8">

          <!-- Colonne principale -->
          <div class="lg:col-span-2 space-y-8">

            <!-- Image du projet -->
            <div class="card-modern p-2 fade-in-section">
              <img :src="project.image" :alt="project.title" class="w-full rounded-xl" />
            </div>

            <!-- Contexte -->
            <div class="card-modern p-8 fade-in-section">
              <h2 class="text-2xl font-bold text-text-primary mb-4 flex items-center gap-3">
                <div class="w-1 h-8 bg-gradient-primary rounded-full"></div>
                Contexte
              </h2>
              <p class="text-text-secondary leading-relaxed">
                {{ project.context }}
              </p>
            </div>

            <!-- Description complète -->
            <div class="card-modern p-8 fade-in-section">
              <h2 class="text-2xl font-bold text-text-primary mb-4 flex items-center gap-3">
                <div class="w-1 h-8 bg-gradient-primary rounded-full"></div>
                Description détaillée
              </h2>
              <p class="text-text-secondary leading-relaxed whitespace-pre-line">
                {{ project.fullDescription }}
              </p>
            </div>

            <!-- Objectifs -->
            <div class="card-modern p-8 fade-in-section">
              <h2 class="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                <div class="w-1 h-8 bg-gradient-primary rounded-full"></div>
                Objectifs
              </h2>
              <ul class="space-y-3">
                <li v-for="(objective, index) in project.objectives" :key="index"
                  class="flex items-start gap-3 text-text-secondary">
                  <svg class="w-6 h-6 text-accent-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{{ objective }}</span>
                </li>
              </ul>
            </div>

            <!-- Fonctionnalités -->
            <div class="card-modern p-8 fade-in-section">
              <h2 class="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                <div class="w-1 h-8 bg-gradient-primary rounded-full"></div>
                Fonctionnalités principales
              </h2>
              <div class="grid md:grid-cols-2 gap-4">
                <div v-for="(feature, index) in project.features" :key="index"
                  class="flex items-start gap-3 p-4 glass rounded-lg hover:glass-strong transition-all">
                  <svg class="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-text-secondary text-sm">{{ feature }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="lg:col-span-1 space-y-6">

            <!-- Infos du projet -->
            <div class="card-modern p-6 sticky top-24 fade-in-section">
              <h3 class="text-xl font-bold text-text-primary mb-6">Informations</h3>

              <div class="space-y-4">
                <!-- Type de projet -->
                <div>
                  <p class="text-text-muted text-sm mb-1">Type</p>
                  <p class="text-text-primary font-semibold">{{ getProjectType(project) }}</p>
                </div>

                <!-- Durée (si disponible) -->
                <div v-if="project.duration">
                  <p class="text-text-muted text-sm mb-1">Durée</p>
                  <p class="text-text-primary font-semibold">{{ project.duration }}</p>
                </div>

                <!-- Équipe (si disponible) -->
                <div v-if="project.teamSize">
                  <p class="text-text-muted text-sm mb-1">Équipe</p>
                  <p class="text-text-primary font-semibold">{{ project.teamSize }} personne{{ project.teamSize > 1 ?
                    's' : '' }}</p>
                </div>

                <!-- Rôle (si disponible) -->
                <div v-if="project.role">
                  <p class="text-text-muted text-sm mb-1">Mon rôle</p>
                  <p class="text-text-primary font-semibold">{{ project.role }}</p>
                </div>

                <!-- Méthodologie (si disponible) -->
                <div v-if="project.methodology">
                  <p class="text-text-muted text-sm mb-1">Méthodologie</p>
                  <p class="text-text-primary font-semibold">{{ project.methodology }}</p>
                </div>

                <!-- Technologies -->
                <div>
                  <p class="text-text-muted text-sm mb-3">Technologies utilisées</p>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="tech in project.technologies" :key="tech"
                      class="px-3 py-1 glass text-xs font-medium text-text-primary rounded-lg">
                      {{ tech }}
                    </span>
                  </div>
                </div>

                <!-- Statut -->
                <div>
                  <p class="text-text-muted text-sm mb-1">Statut</p>
                  <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full glass">
                    <div class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    <span class="text-text-primary text-sm font-medium">Terminé</span>
                  </div>
                </div>
              </div>

              <!-- Actions -->
              <div class="mt-6 pt-6 border-t border-accent-blue/10 space-y-3">
                <a v-if="project.githubLink" :href="project.githubLink" target="_blank" rel="noopener noreferrer"
                  class="w-full px-4 py-3 glass hover:glass-strong text-text-primary font-medium rounded-lg transition-all hover:scale-105 flex items-center justify-center gap-2">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>

                <a v-if="project.liveLink && !isPortfolioProject" :href="project.liveLink" target="_blank"
                  rel="noopener noreferrer"
                  class="w-full px-4 py-3 bg-gradient-primary text-white font-medium rounded-lg transition-all hover:scale-105 flex items-center justify-center gap-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Voir la démo
                </a>

                <router-link to="/projects"
                  class="w-full px-4 py-3 glass hover:glass-strong text-text-secondary hover:text-text-primary font-medium rounded-lg transition-all flex items-center justify-center gap-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Retour aux projets
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Autres projets -->
    <section class="py-20 bg-secondary">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 fade-in-section">
          <h2 class="text-3xl font-bold text-text-primary mb-4">Autres projets</h2>
          <p class="text-text-secondary">Découvrez mes autres réalisations</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-section">
          <ProjectCard v-for="proj in otherProjects" :key="proj.id" :project="proj" />
        </div>
      </div>
    </section>
  </div>

  <!-- Message d'erreur si projet non trouvé -->
  <div v-else class="min-h-screen bg-primary flex items-center justify-center">
    <div class="text-center">
      <div class="text-6xl mb-4">Oups</div>
      <h1 class="text-3xl font-bold text-text-primary mb-4">Projet non trouvé</h1>
      <p class="text-text-secondary mb-8">Ce projet n'existe pas ou a été supprimé</p>
      <router-link to="/projects"
        class="px-8 py-4 bg-gradient-primary text-white font-semibold rounded-xl hover:scale-105 transition-all inline-flex items-center gap-2">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Retour aux projets
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../data/projects.js'

const route = useRoute()
const projectId = computed(() => parseInt(route.params.id))

const project = computed(() => {
  return projects.find(p => p.id === projectId.value)
})

const isPortfolioProject = computed(() => {
  return project.value?.title.toLowerCase().includes('portfolio')
})

const otherProjects = computed(() => {
  return projects
    .filter(p => p.id !== projectId.value)
    .slice(0, 3)
})

const getProjectType = (project) => {
  const title = project.title.toLowerCase()

  if (title.includes('machine learning') || title.includes('data') || title.includes('ia') || title.includes('intelligence')) {
    return 'IA & Data Science'
  }
  if (title.includes('iot') || title.includes('parking')) {
    return 'IoT & Systèmes Embarqués'
  }
  if (title.includes('web') || title.includes('application') || title.includes('site')) {
    return 'Application Web'
  }

  return 'Projet Informatique'
}

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