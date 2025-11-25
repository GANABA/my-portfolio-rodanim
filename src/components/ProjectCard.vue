<template>
  <router-link :to="`/project/${project.id}`"
    class="group relative block bg-gray-dark rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 border border-gray-dark">
    <!-- Image du projet -->
    <div class="relative h-56 overflow-hidden bg-dark/50">
      <img v-if="project.image" :src="project.image" :alt="project.title"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
      <div v-else class="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent/20 to-dark">
        <span class="text-accent text-6xl font-bold">{{ project.title.charAt(0) }}</span>
      </div>

      <!-- Overlay au hover -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      </div>
    </div>

    <!-- Contenu -->
    <div class="p-6">
      <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
        {{ project.title }}
      </h3>
      <p class="text-gray-400 mb-4 line-clamp-2">
        {{ project.shortDescription }}
      </p>

      <!-- Technologies -->
      <div class="flex flex-wrap gap-2 mb-4">
        <span v-for="tech in project.technologies.slice(0, 3)" :key="tech"
          class="px-3 py-1 bg-dark text-accent text-xs font-semibold rounded-full border border-accent/30">
          {{ tech }}
        </span>
      </div>

      <!-- Bouton -->
      <router-link :to="`/project/${project.id}`"
        class="inline-flex items-center text-accent font-semibold hover:gap-2 transition-all group">
        Voir le projet
        <svg class="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </router-link>
    </div>

    <!-- Border glow effect -->
    <div
      class="absolute inset-0 border-2 border-transparent group-hover:border-accent/30 rounded-2xl transition-all pointer-events-none">
    </div>
  </router-link>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>