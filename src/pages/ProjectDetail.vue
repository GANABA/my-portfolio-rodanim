<template>
  <div class="bg-light text-dark font-sans min-h-screen" v-if="project">

    <!-- Header -->
    <section class="pt-32 pb-20 px-6 border-b border-grey-200">
      <div class="max-w-5xl mx-auto">
        <!-- Back Button -->
        <div class="mb-12">
          <router-link
            to="/projects"
            class="inline-flex items-center gap-2 font-mono text-sm tracking-wider text-grey-600 hover:text-accent transition-colors group"
          >
            <svg class="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {{ t('projectDetail.back') }}
          </router-link>
        </div>

        <!-- Title -->
        <h1 class="text-4xl md:text-6xl font-sans font-bold mb-6 leading-tight">
          {{ project.title }}
        </h1>

        <p class="text-xl text-grey-600 mb-12 max-w-3xl">
          {{ project.shortDescription }}
        </p>

        <!-- Meta Info -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 border-b border-grey-200">
          <div>
            <div class="text-xs font-mono tracking-widest text-grey-500 mb-2">{{ t('projectDetail.type') }}</div>
            <div class="font-sans text-dark">{{ getProjectType(project) }}</div>
          </div>
          <div v-if="project.duration">
            <div class="text-xs font-mono tracking-widest text-grey-500 mb-2">{{ t('projectDetail.duration') }}</div>
            <div class="font-sans text-dark">{{ project.duration }}</div>
          </div>
          <div v-if="project.teamSize">
            <div class="text-xs font-mono tracking-widest text-grey-500 mb-2">{{ t('projectDetail.team') }}</div>
            <div class="font-sans text-dark">{{ project.teamSize }} {{ t('projectDetail.teamUnit') }}</div>
          </div>
          <div v-if="project.role">
            <div class="text-xs font-mono tracking-widest text-grey-500 mb-2">{{ t('projectDetail.role') }}</div>
            <div class="font-sans text-dark">{{ project.role }}</div>
          </div>
        </div>

        <!-- Actions -->
        <div class="flex gap-4 mt-12">
          <a
            v-if="project.githubLink"
            :href="project.githubLink"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-6 py-3 border border-dark text-dark font-mono text-xs tracking-widest hover:bg-dark hover:text-light transition-all duration-300"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            {{ t('projectDetail.github') }}
          </a>
          <span
            v-else-if="project.privateRepo"
            class="inline-flex items-center gap-2 px-6 py-3 border border-grey-300 text-grey-500 font-mono text-xs tracking-widest"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            {{ t('projectDetail.privateRepo') }}
          </span>
          <a
            v-if="project.liveLink"
            :href="project.liveLink"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-6 py-3 bg-dark text-light font-mono text-xs tracking-widest hover:bg-accent hover:text-dark transition-all duration-300"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            {{ t('projectDetail.liveDemo') }}
          </a>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-20 px-6">
      <div class="max-w-5xl mx-auto space-y-20">

        <!-- Image -->
        <div v-if="project.image" class="border border-grey-200">
          <img :src="project.image" :alt="project.title" class="w-full" />
        </div>

        <!-- La prose longue n'est pas traduite : on l'annonce plutôt que de la subir -->
        <div
          v-if="t('projectDetail.frenchOnly')"
          class="flex items-start gap-3 border-l-2 border-accent pl-4 py-1 text-sm text-grey-600"
        >
          <span>{{ t('projectDetail.frenchOnly') }}</span>
        </div>

        <!-- Description -->
        <div class="grid md:grid-cols-12 gap-12">
          <div class="md:col-span-3">
            <h2 class="font-mono text-sm tracking-widest text-grey-500">{{ t('projectDetail.description') }}</h2>
          </div>
          <div class="md:col-span-9">
            <p class="text-grey-700 text-lg leading-relaxed" lang="fr">{{ project.fullDescription }}</p>
          </div>
        </div>

        <!-- Context -->
        <div class="grid md:grid-cols-12 gap-12 pt-12 border-t border-grey-200">
          <div class="md:col-span-3">
            <h2 class="font-mono text-sm tracking-widest text-grey-500">{{ t('projectDetail.context') }}</h2>
          </div>
          <div class="md:col-span-9">
            <p class="text-grey-700 text-lg leading-relaxed" lang="fr">{{ project.context }}</p>
          </div>
        </div>

        <!-- Objectives -->
        <div class="grid md:grid-cols-12 gap-12 pt-12 border-t border-grey-200">
          <div class="md:col-span-3">
            <h2 class="font-mono text-sm tracking-widest text-grey-500">{{ t('projectDetail.objectives') }}</h2>
          </div>
          <div class="md:col-span-9">
            <ul class="space-y-3" lang="fr">
              <li v-for="(objective, index) in project.objectives" :key="index" class="flex items-start gap-3">
                <span class="w-6 h-px bg-accent mt-3 flex-shrink-0"></span>
                <span class="text-grey-700 text-lg">{{ objective }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Features -->
        <div class="grid md:grid-cols-12 gap-12 pt-12 border-t border-grey-200">
          <div class="md:col-span-3">
            <h2 class="font-mono text-sm tracking-widest text-grey-500">{{ t('projectDetail.features') }}</h2>
          </div>
          <div class="md:col-span-9">
            <ul class="grid md:grid-cols-2 gap-3" lang="fr">
              <li v-for="(feature, index) in project.features" :key="index" class="flex items-start gap-3">
                <span class="w-1 h-1 bg-dark rounded-full mt-2.5 flex-shrink-0"></span>
                <span class="text-grey-700">{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Technologies -->
        <div class="grid md:grid-cols-12 gap-12 pt-12 border-t border-grey-200">
          <div class="md:col-span-3">
            <h2 class="font-mono text-sm tracking-widest text-grey-500">{{ t('projectDetail.stack') }}</h2>
          </div>
          <div class="md:col-span-9">
            <div class="flex flex-wrap gap-3">
              <span v-for="tech in project.technologies" :key="tech"
                class="px-4 py-2 border border-grey-300 text-dark font-mono text-sm hover:border-accent hover:text-accent transition-colors">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>

  </div>

  <!-- Project Not Found -->
  <div v-else class="min-h-screen bg-light flex items-center justify-center px-6">
    <div class="text-center">
      <h1 class="text-6xl font-sans font-bold mb-6">404</h1>
      <p class="text-xl text-grey-600 mb-12">{{ t('projectDetail.notFound') }}</p>
      <router-link
        to="/projects"
        class="inline-flex items-center gap-2 px-8 py-4 bg-dark text-light font-mono text-xs tracking-widest hover:bg-accent hover:text-dark transition-all duration-300"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        {{ t('projectDetail.backToProjects') }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { projects, localizedProject } from '../data/projects.js'

const route = useRoute()
const { t, locale } = useI18n()
const projectId = computed(() => parseInt(route.params.id))

const project = computed(() => {
  const found = projects.find(p => p.id === projectId.value)
  return localizedProject(found, locale.value)
})

// Le type est déduit du titre français, stable quelle que soit la locale
// affichée, puis traduit.
const getProjectType = (project) => {
  const source = projects.find(p => p.id === project.id)
  const title = (source?.title ?? project.title).toLowerCase()

  if (title.includes('machine learning') || title.includes('data') || title.includes('ia') || title.includes('intelligence')) {
    return t('projectDetail.types.ai')
  }
  if (title.includes('iot') || title.includes('parking')) {
    return t('projectDetail.types.iot')
  }
  return t('projectDetail.types.web')
}
</script>
