<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-light/90 backdrop-blur-md border-b border-grey-200">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center h-16 sm:h-20">

        <!-- Logo -->
        <router-link to="/" class="group flex items-center gap-2 sm:gap-3 hover:opacity-70 transition-opacity">
          <div class="w-8 h-8 sm:w-10 sm:h-10 bg-dark flex items-center justify-center">
            <span class="text-light font-mono font-bold text-base sm:text-lg">R</span>
          </div>
          <span class="font-mono text-xs sm:text-sm tracking-wider text-dark hidden sm:block">
            RODANIM GANABA
          </span>
        </router-link>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-6">
          <router-link
            to="/experiences"
            :class="isActive('/experiences') ? 'text-accent' : 'text-grey-600 hover:text-dark'"
            class="font-mono text-xs tracking-wider transition-colors"
          >
            PARCOURS
          </router-link>
          <router-link
            to="/projects"
            :class="isActive('/projects') ? 'text-accent' : 'text-grey-600 hover:text-dark'"
            class="font-mono text-xs tracking-wider transition-colors"
          >
            PROJETS
          </router-link>
          <a
            href="mailto:ganabarodanimkm@gmail.com"
            class="font-mono text-xs tracking-wider text-grey-600 hover:text-dark transition-colors"
          >
            CONTACT
          </a>
          <a
            href="/CV Rodanim Ganaba.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="px-4 sm:px-6 py-1.5 sm:py-2 bg-dark text-light border-2 border-dark font-mono text-xs tracking-widest hover:bg-transparent hover:text-dark transition-all duration-300"
          >
            CV
          </a>
        </div>

        <!-- Mobile: menu burger + CV -->
        <div class="flex md:hidden items-center gap-3">
          <a
            href="/CV Rodanim Ganaba.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="px-3 py-1.5 bg-dark text-light border-2 border-dark font-mono text-xs tracking-widest hover:bg-transparent hover:text-dark transition-all duration-300"
          >
            CV
          </a>
          <button
            @click="menuOpen = !menuOpen"
            class="w-9 h-9 flex flex-col justify-center items-center gap-1.5 hover:opacity-70 transition-opacity"
            aria-label="Menu"
          >
            <span
              class="block w-5 h-px bg-dark transition-all duration-300"
              :class="menuOpen ? 'rotate-45 translate-y-[3.5px]' : ''"
            ></span>
            <span
              class="block w-5 h-px bg-dark transition-all duration-300"
              :class="menuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''"
            ></span>
          </button>
        </div>

      </div>
    </div>

    <!-- Mobile menu -->
    <div
      v-show="menuOpen"
      class="md:hidden border-t border-grey-200 bg-light"
    >
      <div class="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
        <router-link
          to="/experiences"
          @click="menuOpen = false"
          :class="isActive('/experiences') ? 'text-accent' : 'text-grey-600'"
          class="font-mono text-xs tracking-wider py-3 border-b border-grey-100 hover:text-dark transition-colors"
        >
          PARCOURS & EXPÉRIENCES
        </router-link>
        <router-link
          to="/projects"
          @click="menuOpen = false"
          :class="isActive('/projects') ? 'text-accent' : 'text-grey-600'"
          class="font-mono text-xs tracking-wider py-3 border-b border-grey-100 hover:text-dark transition-colors"
        >
          PROJETS
        </router-link>
        <a
          href="mailto:ganabarodanimkm@gmail.com"
          @click="menuOpen = false"
          class="font-mono text-xs tracking-wider py-3 text-grey-600 hover:text-dark transition-colors"
        >
          CONTACT
        </a>
      </div>
    </div>
  </nav>

  <!-- Spacer -->
  <div class="h-16 sm:h-20"></div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const menuOpen = ref(false)

const isActive = (path) => {
  return route.path === path || route.path.startsWith(path + '/')
}
</script>
