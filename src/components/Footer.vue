<template>
  <footer class="border-t border-grey-200 py-8 sm:py-12 px-4 sm:px-6 bg-light">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

      <!-- Logo + tagline -->
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 bg-dark flex items-center justify-center">
          <span class="text-light font-mono font-bold text-sm">R</span>
        </div>
        <p class="text-xs sm:text-sm text-grey-500 font-mono">
          © {{ currentYear }} Rodanim Ganaba
        </p>
      </div>

      <!-- Navigation -->
      <nav class="flex flex-wrap gap-x-6 gap-y-2">
        <router-link
          to="/experiences"
          class="font-mono text-xs tracking-wider text-grey-500 hover:text-dark transition-colors"
        >
          PARCOURS
        </router-link>
        <router-link
          to="/projects"
          class="font-mono text-xs tracking-wider text-grey-500 hover:text-dark transition-colors"
        >
          PROJETS
        </router-link>
        <a
          href="mailto:ganabarodanimkm@gmail.com"
          class="font-mono text-xs tracking-wider text-grey-500 hover:text-dark transition-colors"
        >
          CONTACT
        </a>
        <a
          href="https://github.com/GANABA"
          target="_blank"
          rel="noopener noreferrer"
          class="font-mono text-xs tracking-wider text-grey-500 hover:text-dark transition-colors"
        >
          GITHUB
        </a>
        <a
          href="https://www.linkedin.com/in/ganaba-r-melchis%C3%A9dech/"
          target="_blank"
          rel="noopener noreferrer"
          class="font-mono text-xs tracking-wider text-grey-500 hover:text-dark transition-colors"
        >
          LINKEDIN
        </a>
      </nav>

    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>
