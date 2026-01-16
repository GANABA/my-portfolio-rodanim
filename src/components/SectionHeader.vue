<template>
  <div class="text-center mb-16 fade-in-section">
    <!-- Badge/Tag -->
    <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
      <div class="w-2 h-2 rounded-full bg-accent-blue animate-pulse"></div>
      <span class="text-accent-blue text-sm font-semibold tracking-wider uppercase">
        {{ badge }}
      </span>
    </div>
    
    <!-- Titre principal -->
    <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4">
      <slot name="title">{{ title }}</slot>
    </h2>
    
    <!-- Subtitle -->
    <p v-if="subtitle" class="text-text-secondary text-lg md:text-xl max-w-3xl mx-auto">
      {{ subtitle }}
    </p>
    
    <!-- Decorative line -->
    <div class="flex items-center justify-center gap-3 mt-6">
      <div class="h-px w-12 bg-gradient-to-r from-transparent to-accent-blue"></div>
      <div class="w-2 h-2 rounded-full bg-accent-blue"></div>
      <div class="h-px w-12 bg-gradient-to-l from-transparent to-accent-purple"></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  badge: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
  },
})
</script>