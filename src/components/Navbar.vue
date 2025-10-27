<template>
  <nav class="bg-dark shadow-lg sticky top-0 z-50 border-b border-gray-dark">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo / Nom -->
        <router-link to="/" class="text-2xl font-bold text-accent hover:text-white transition-colors">
          Rodanim.
        </router-link>

        <!-- Menu Desktop -->
        <div class="hidden md:flex space-x-8">
          <router-link 
            to="/" 
            class="text-gray-300 hover:text-accent transition-colors font-medium"
            :class="{ 'text-accent': $route.path === '/' }"
          >
            Accueil
          </router-link>
          <router-link 
            to="/projects" 
            class="text-gray-300 hover:text-accent transition-colors font-medium"
            :class="{ 'text-accent': $route.path === '/projects' }"
          >
            Projets
          </router-link>
          <router-link 
            to="/about" 
            class="text-gray-300 hover:text-accent transition-colors font-medium"
            :class="{ 'text-accent': $route.path === '/about' }"
          >
            À propos
          </router-link>
          <router-link 
            to="/contact" 
            class="text-gray-300 hover:text-accent transition-colors font-medium"
            :class="{ 'text-accent': $route.path === '/contact' }"
          >
            Contact
          </router-link>
        </div>

        <!-- Bouton Menu Mobile -->
        <button 
          @click="toggleMenu" 
          class="md:hidden text-white focus:outline-none"
        >
          <svg 
            class="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              v-if="!isMenuOpen" 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path 
              v-else 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Menu Mobile -->
    <div 
      v-if="isMenuOpen" 
      class="md:hidden bg-gray-dark border-t border-gray-dark"
    >
      <div class="px-4 py-3 space-y-3">
        <router-link 
          to="/" 
          @click="closeMenu"
          class="block text-gray-300 hover:text-accent transition-colors font-medium"
          :class="{ 'text-accent': $route.path === '/' }"
        >
          Accueil
        </router-link>
        <router-link 
          to="/projects" 
          @click="closeMenu"
          class="block text-gray-300 hover:text-accent transition-colors font-medium"
          :class="{ 'text-accent': $route.path === '/projects' }"
        >
          Projets
        </router-link>
        <router-link 
          to="/about" 
          @click="closeMenu"
          class="block text-gray-300 hover:text-accent transition-colors font-medium"
          :class="{ 'text-accent': $route.path === '/about' }"
        >
          À propos
        </router-link>
        <router-link 
          to="/contact" 
          @click="closeMenu"
          class="block text-gray-300 hover:text-accent transition-colors font-medium"
          :class="{ 'text-accent': $route.path === '/contact' }"
        >
          Contact
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>