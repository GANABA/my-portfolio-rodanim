<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-light/80 backdrop-blur-md border-b border-grey-200">
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

        <!-- Actions -->
        <div class="flex items-center gap-3 sm:gap-6">
          <!-- Contact Link -->
          <a
            href="#contact"
            class="font-mono text-xs sm:text-sm tracking-wider hover:text-accent transition-colors"
          >
            CONTACT
          </a>

          <!-- CV Download -->
          <a
            href="/CV Rodanim Ganaba.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="px-4 sm:px-6 py-1.5 sm:py-2 bg-dark text-light border-2 border-dark font-mono text-xs tracking-widest hover:bg-transparent hover:text-dark transition-all duration-300"
          >
            CV
          </a>
        </div>

      </div>
    </div>
  </nav>

  <!-- Spacer -->
  <div class="h-16 sm:h-20"></div>
</template>

<script setup>
// Navbar ultra-minimal pour design one-page
</script>
