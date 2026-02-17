<template>
  <div class="bg-light text-dark font-sans min-h-screen">

    <!-- Header -->
    <section class="pt-32 pb-20 px-6 border-b border-grey-200">
      <div class="max-w-6xl mx-auto">
        <div class="mb-8">
          <router-link
            to="/"
            class="inline-flex items-center gap-2 font-mono text-sm tracking-wider text-grey-600 hover:text-accent transition-colors group"
          >
            <svg class="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            RETOUR
          </router-link>
        </div>

        <h1 class="text-5xl md:text-7xl font-sans font-bold mb-6">
          Tous mes projets
        </h1>
        <p class="text-xl text-grey-600 max-w-3xl">
          {{ allProjects.length }} projets réalisés · Web, Data Science & IoT
        </p>
      </div>
    </section>

    <!-- Projects List -->
    <section class="py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="space-y-12">
          <div
            v-for="(project, index) in allProjects"
            :key="project.id"
            @click="handleProjectClick(project.id)"
            class="group block border-t border-grey-200 pt-12 cursor-pointer"
          >
            <div class="grid md:grid-cols-12 gap-8">
              <!-- Left - Number & Category -->
              <div class="md:col-span-2">
                <div class="font-mono text-sm text-grey-400 mb-2">
                  {{ String(index + 1).padStart(2, '0') }}
                </div>
                <div v-if="project.featured" class="inline-block px-3 py-1 border border-accent text-accent text-xs font-mono tracking-wider">
                  FEATURED
                </div>
              </div>

              <!-- Right - Content -->
              <div class="md:col-span-10">
                <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <!-- Info -->
                  <div class="flex-1">
                    <h3 class="text-3xl md:text-4xl font-sans font-bold mb-4 group-hover:text-accent transition-colors">
                      {{ project.title }}
                    </h3>

                    <p class="text-grey-600 text-lg mb-6 leading-relaxed max-w-2xl">
                      {{ project.shortDescription }}
                    </p>

                    <!-- Technologies -->
                    <div class="flex flex-wrap gap-2 mb-6">
                      <span v-for="tech in project.technologies" :key="tech"
                        class="px-3 py-1 text-xs font-mono border border-grey-300 text-grey-600 hover:border-accent hover:text-accent transition-colors">
                        {{ tech }}
                      </span>
                    </div>

                    <!-- Links -->
                    <div class="flex gap-4">
                      <a
                        v-if="project.githubLink"
                        :href="project.githubLink"
                        target="_blank"
                        rel="noopener noreferrer"
                        @click.stop
                        class="inline-flex items-center gap-2 font-mono text-xs tracking-wider hover:text-accent transition-colors"
                      >
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GITHUB
                      </a>
                      <a
                        v-if="project.liveLink"
                        :href="project.liveLink"
                        target="_blank"
                        rel="noopener noreferrer"
                        @click.stop
                        class="inline-flex items-center gap-2 font-mono text-xs tracking-wider hover:text-accent transition-colors"
                      >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        LIVE
                      </a>
                    </div>
                  </div>

                  <!-- Arrow -->
                  <div class="md:mt-0">
                    <div class="w-12 h-12 border border-grey-300 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all">
                      <svg class="w-6 h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-grey-600 group-hover:text-dark"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 px-6 border-t border-grey-200">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-sm text-grey-500 font-mono">
          © 2025 Rodanim Ganaba
        </p>
        <p class="text-sm text-grey-500 font-mono">
          Développé avec Vue.js & Tailwind CSS
        </p>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { projects } from '../data/projects.js'

const router = useRouter()

// Tous les projets
const allProjects = computed(() => projects)

// Navigation vers détail projet
const handleProjectClick = (projectId) => {
  router.push(`/project/${projectId}`)
}
</script>
