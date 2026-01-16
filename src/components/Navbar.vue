<template>
  <nav class="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-accent-blue/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">

        <!-- Logo -->
        <router-link to="/" class="group flex items-center gap-3 transition-all duration-300 hover:scale-105">
          <div class="relative">
            <!-- Effet glow derrière le logo -->
            <div class="absolute inset-0 bg-accent-blue blur-xl opacity-50 group-hover:opacity-100 transition-opacity">
            </div>
            <!-- Nouveau design du R avec bordure -->
            <div
              class="relative w-10 h-10 rounded-xl bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center font-bold text-xl shadow-lg border-2 border-accent-blue/30">
              <span class="text-white tracking-tight">R</span>
            </div>
          </div>
          <span class="text-2xl font-bold gradient-text hidden sm:block">
            Rodanim.
          </span>
        </router-link>

        <!-- Menu Desktop -->
        <div class="hidden lg:flex items-center gap-1">
          <router-link v-for="item in navItems" :key="item.path" :to="item.path"
            class="relative px-4 py-2 text-text-secondary hover:text-text-primary font-medium transition-all duration-300 group"
            :class="{ 'text-accent-blue': isActive(item.path) }">
            <span class="relative z-10">{{ item.name }}</span>
            <!-- Effet underline animé -->
            <div
              class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
              :class="{ 'scale-x-100': isActive(item.path) }"></div>
          </router-link>

          <!-- Bouton CV -->
          <a href="/CV Rodanim Ganaba.pdf" download
            class="ml-4 px-6 py-2.5 bg-gradient-primary text-white font-semibold rounded-lg hover:scale-105 hover:shadow-glow-md transition-all duration-300 flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            CV
          </a>
        </div>

        <!-- Bouton Menu Mobile -->
        <button @click="toggleMenu"
          class="lg:hidden relative w-12 h-12 flex items-center justify-center rounded-xl transition-all z-50"
          :class="isMenuOpen ? 'bg-accent-blue shadow-glow-md' : 'bg-secondary border-2 border-accent-blue/30'"
          aria-label="Menu">
          <div class="w-6 h-5 flex flex-col justify-between">
            <span class="w-full h-0.5 rounded-full transition-all duration-300"
              :class="isMenuOpen ? 'rotate-45 translate-y-2 bg-white' : 'bg-white'"></span>
            <span class="w-full h-0.5 rounded-full transition-all duration-300"
              :class="isMenuOpen ? 'opacity-0 bg-white' : 'bg-white'"></span>
            <span class="w-full h-0.5 rounded-full transition-all duration-300"
              :class="isMenuOpen ? '-rotate-45 -translate-y-2 bg-white' : 'bg-white'"></span>
          </div>
        </button>
      </div>
    </div>

    <!-- Menu Mobile avec animation -->
    <transition enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-4">
      <div v-if="isMenuOpen" class="lg:hidden glass-strong border-t border-accent-blue/10">
        <div class="max-w-7xl mx-auto px-4 py-6 space-y-2">
          <router-link v-for="item in navItems" :key="item.path" :to="item.path" @click="closeMenu"
            class="block px-4 py-3 rounded-lg text-text-secondary hover:text-text-primary hover:bg-secondary/50 font-medium transition-all"
            :class="{ 'text-accent-blue bg-secondary/30': isActive(item.path) }">
            {{ item.name }}
          </router-link>

          <!-- CV mobile -->
          <a href="/CV Rodanim Ganaba.pdf" download
            class="block px-4 py-3 bg-gradient-primary text-white font-semibold rounded-lg text-center">
            Télécharger mon CV
          </a>
        </div>
      </div>
    </transition>
  </nav>

  <!-- Spacer pour compenser la navbar fixe -->
  <div class="h-20"></div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isMenuOpen = ref(false)

const navItems = [
  { name: 'Accueil', path: '/' },
  { name: 'À propos', path: '/about' },
  { name: 'Compétences', path: '/skills' },
  { name: 'Expériences', path: '/experiences' },
  { name: 'Projets', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

const isActive = (path) => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>