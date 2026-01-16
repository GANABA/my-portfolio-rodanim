<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
    
    <!-- Animated background elements -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Gradient orbs -->
      <div class="absolute top-1/4 -left-48 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-1/4 -right-48 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl animate-float" style="animation-delay: 2s;"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-cyan/10 rounded-full blur-3xl animate-pulse"></div>
      
      <!-- Grid pattern -->
      <div class="absolute inset-0 bg-[linear-gradient(rgba(96,165,250,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        <!-- Left Content -->
        <div class="text-center lg:text-left space-y-8 animate-slide-in">
          
          <!-- Greeting badge -->
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-accent-blue"></span>
            </span>
            <span class="text-text-secondary text-sm font-medium">Disponible pour de nouvelles opportunités</span>
          </div>

          <!-- Main Title -->
          <div class="space-y-4">
            <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span class="text-text-primary">Salut, je suis</span><br />
              <span class="gradient-text animate-gradient bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan">
                Rodanim Ganaba
              </span>
            </h1>
            
            <!-- Typing animation subtitle -->
            <div class="flex items-center gap-3 text-2xl sm:text-3xl font-semibold text-text-secondary justify-center lg:justify-start">
              <span>Développeur</span>
              <span class="text-accent-blue">{{ typedText }}</span>
              <span class="w-0.5 h-8 bg-accent-blue animate-pulse"></span>
            </div>
          </div>

          <!-- Description -->
          <p class="text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Étudiant en <span class="text-accent-blue font-semibold">BUT 3 Informatique</span>, 
            passionné par la création d'applications innovantes et l'exploration des technologies émergentes.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <router-link 
              to="/projects"
              class="group relative px-8 py-4 bg-gradient-primary text-white font-semibold rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-glow-lg"
            >
              <span class="relative z-10 flex items-center justify-center gap-2">
                Voir mes projets
                <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-accent-purple to-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </router-link>

            <router-link 
              to="/contact"
              class="px-8 py-4 glass hover:glass-strong text-text-primary font-semibold rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-2 border border-accent-blue/20 hover:border-accent-blue/40"
            >
              Me contacter
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </router-link>
          </div>

          <!-- Social Links -->
          <div class="flex gap-4 justify-center lg:justify-start pt-4">
            <a 
              href="https://github.com/GANABA" 
              target="_blank"
              rel="noopener noreferrer"
              class="w-12 h-12 rounded-xl glass hover:glass-strong flex items-center justify-center text-text-secondary hover:text-accent-blue transition-all hover:scale-110 hover:-translate-y-1 group"
              aria-label="GitHub"
            >
              <svg class="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/ganaba-r-melchis%C3%A9dech/" 
              target="_blank"
              rel="noopener noreferrer"
              class="w-12 h-12 rounded-xl glass hover:glass-strong flex items-center justify-center text-text-secondary hover:text-accent-blue transition-all hover:scale-110 hover:-translate-y-1 group"
              aria-label="LinkedIn"
            >
              <svg class="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a 
              href="/CV Rodanim Ganaba.pdf" 
              download
              class="w-12 h-12 rounded-xl glass hover:glass-strong flex items-center justify-center text-text-secondary hover:text-accent-blue transition-all hover:scale-110 hover:-translate-y-1 group"
              aria-label="Télécharger CV"
            >
              <svg class="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Right Content - 3D Avatar/Image -->
        <div class="relative animate-slide-in" style="animation-delay: 0.2s;">
          <div class="relative mx-auto max-w-md lg:max-w-lg">
            
            <!-- Glow effect -->
            <div class="absolute inset-0 bg-gradient-to-br from-accent-blue/30 to-accent-purple/30 rounded-full blur-3xl animate-pulse"></div>
            
            <!-- Main avatar container -->
            <div class="relative">
              <!-- Decorative rings -->
              <div class="absolute inset-0 rounded-full border-2 border-accent-blue/20 animate-spin" style="animation-duration: 20s;"></div>
              <div class="absolute inset-4 rounded-full border-2 border-accent-purple/20 animate-spin" style="animation-duration: 15s; animation-direction: reverse;"></div>
              
              <!-- Avatar -->
              <div class="relative aspect-square rounded-full bg-gradient-to-br from-secondary to-primary-light p-2 border-4 border-accent-blue/30">
                <div class="w-full h-full rounded-full bg-gradient-to-br from-primary-light to-primary flex items-center justify-center overflow-hidden border-2 border-accent-blue/20">
                  <!-- Pour la photo, remplacer par <img src="ta-photo.jpg" class="w-full h-full object-cover" alt="Rodanim Ganaba" /> -->
                  <div class="text-8xl sm:text-9xl font-bold gradient-text">R</div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>

    
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Typing animation
const texts = ['Back-end', 'Data & IA']
const typedText = ref('')
let textIndex = 0
let charIndex = 0
let isDeleting = false
let typingSpeed = 200

const typeText = () => {
  const currentText = texts[textIndex]
  
  if (!isDeleting) {
    typedText.value = currentText.substring(0, charIndex)
    charIndex++
    
    if (charIndex > currentText.length) {
      isDeleting = true
      typingSpeed = 100
      setTimeout(typeText, 2000)
      return
    }
  } else {
    typedText.value = currentText.substring(0, charIndex)
    charIndex--
    typingSpeed = 50
    
    if (charIndex === 0) {
      isDeleting = false
      textIndex = (textIndex + 1) % texts.length
      typingSpeed = 500
    }
  }
  
  setTimeout(typeText, typingSpeed)
}

onMounted(() => {
  typeText()
})
</script>

<style scoped>
.animate-slide-in {
  animation: slideIn 0.8s ease-out forwards;
  opacity: 0;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>