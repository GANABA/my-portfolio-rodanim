<template>
  <div class="bg-light text-dark font-sans">

    <!-- Hero Section -->
    <section class="min-h-screen flex items-center justify-center px-4 sm:px-6 relative overflow-hidden">
      <!-- Decorative accent -->
      <div class="absolute top-0 right-0 w-px h-full bg-grey-200"></div>
      <div class="absolute bottom-0 left-0 w-full h-px bg-grey-200"></div>

      <div class="max-w-6xl w-full">
        <!-- Label -->
        <div class="mb-6 sm:mb-8 opacity-0 animate-reveal" style="animation-delay: 0.2s;">
          <span class="inline-flex items-center gap-2 text-xs sm:text-sm font-mono tracking-wider text-grey-600">
            <span class="w-6 sm:w-8 h-px bg-accent"></span>
            PORTFOLIO 2025
          </span>
        </div>

        <!-- Main Title -->
        <h1 class="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-sans font-bold leading-none mb-6 sm:mb-8 opacity-0 animate-reveal" style="animation-delay: 0.4s;">
          Rodanim<br />
          <span class="text-grey-400">Ganaba</span>
        </h1>

        <!-- Subtitle -->
        <div class="max-w-2xl opacity-0 animate-reveal" style="animation-delay: 0.6s;">
          <p class="text-lg sm:text-xl md:text-2xl font-sans font-light text-grey-700 mb-8 sm:mb-12">
            Développeur Web & Aspirant Développeur IA
          </p>
        </div>

        <!-- CTA -->
        <div class="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 opacity-0 animate-reveal" style="animation-delay: 0.8s;">
          <a
            href="#projets"
            class="group px-6 sm:px-8 py-3 sm:py-4 bg-dark text-light border-2 border-dark font-mono text-xs sm:text-sm tracking-wider hover:bg-transparent hover:text-dark transition-all duration-300 inline-flex items-center justify-center gap-3"
          >
            VOIR MES PROJETS
            <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contact"
            class="px-6 sm:px-8 py-3 sm:py-4 border-2 border-dark text-dark font-mono text-xs sm:text-sm tracking-wider hover:scale-105 transition-all duration-300 text-center"
          >
            CONTACT
          </a>
        </div>

        <!-- Scroll indicator -->
        <div class="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style="animation-delay: 1.2s;">
          <div class="flex flex-col items-center gap-2 text-grey-400">
            <span class="text-xs font-mono tracking-widest">SCROLL</span>
            <div class="w-px h-16 bg-grey-300 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-16 sm:py-24 md:py-32 px-4 sm:px-6 border-t border-grey-200">
      <div class="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 md:gap-12 items-start">
        <!-- Left - Label -->
        <div class="md:col-span-3">
          <span class="inline-block font-mono text-xs sm:text-sm tracking-widest text-grey-500 mb-4">
            01 — À PROPOS
          </span>
        </div>

        <!-- Right - Content -->
        <div class="md:col-span-9 space-y-6 sm:space-y-8">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-sans font-bold leading-tight">
            Développeur passionné par la création d'applications web et l'exploration de l'IA
          </h2>

          <div class="space-y-4 text-grey-600 text-base sm:text-lg leading-relaxed max-w-3xl">
            <p>
              Actuellement en BUT 3 Informatique, je me spécialise dans le développement backend.
            </p>
            <p>
              Passionné par l'intelligence artificielle, j'oriente mon parcours vers le développement IA,
              en combinant mes compétences en développement avec le machine learning et la data science.
            </p>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8 border-t border-grey-200">
            <div>
              <div class="text-3xl sm:text-4xl font-mono font-bold text-accent mb-2">9</div>
              <div class="text-xs sm:text-sm text-grey-600 font-mono tracking-wide">PROJETS</div>
            </div>
            <div>
              <div class="text-3xl sm:text-4xl font-mono font-bold text-accent mb-2">3+</div>
              <div class="text-xs sm:text-sm text-grey-600 font-mono tracking-wide">ANNÉES</div>
            </div>
            <div>
              <div class="text-3xl sm:text-4xl font-mono font-bold text-accent mb-2">10+</div>
              <div class="text-xs sm:text-sm text-grey-600 font-mono tracking-wide">TECHNOS</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="competences" class="py-16 sm:py-24 md:py-32 px-4 sm:px-6 border-t border-grey-200">
      <div class="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 md:gap-12">
        <!-- Left - Label -->
        <div class="md:col-span-3">
          <span class="inline-block font-mono text-xs sm:text-sm tracking-widest text-grey-500 mb-4">
            02 — COMPÉTENCES
          </span>
        </div>

        <!-- Right - Skills -->
        <div class="md:col-span-9">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-sans font-bold mb-12 sm:mb-16">Stack Technique</h2>

          <div class="space-y-8 sm:space-y-12">
            <!-- Web Development -->
            <div>
              <h3 class="text-xs sm:text-sm font-mono tracking-widest text-grey-500 mb-4 sm:mb-6">DÉVELOPPEMENT WEB</h3>
              <div class="flex flex-wrap gap-2 sm:gap-3">
                <span v-for="tech in webTechs" :key="tech"
                  class="px-3 sm:px-4 py-1.5 sm:py-2 border border-grey-300 text-dark font-mono text-xs sm:text-sm hover:border-accent hover:text-accent transition-colors">
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Data & IA -->
            <div>
              <h3 class="text-xs sm:text-sm font-mono tracking-widest text-grey-500 mb-4 sm:mb-6">DATA SCIENCE & IA</h3>
              <div class="flex flex-wrap gap-2 sm:gap-3">
                <span v-for="tech in dataTechs" :key="tech"
                  class="px-3 sm:px-4 py-1.5 sm:py-2 border border-grey-300 text-dark font-mono text-xs sm:text-sm hover:border-accent hover:text-accent transition-colors">
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Tools -->
            <div>
              <h3 class="text-xs sm:text-sm font-mono tracking-widest text-grey-500 mb-4 sm:mb-6">OUTILS & AUTRES</h3>
              <div class="flex flex-wrap gap-2 sm:gap-3">
                <span v-for="tech in toolsTechs" :key="tech"
                  class="px-3 sm:px-4 py-1.5 sm:py-2 border border-grey-300 text-dark font-mono text-xs sm:text-sm hover:border-accent hover:text-accent transition-colors">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projets" class="py-16 sm:py-24 md:py-32 px-4 sm:px-6 border-t border-grey-200">
      <div class="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 md:gap-12">
        <!-- Left - Label -->
        <div class="md:col-span-3">
          <span class="inline-block font-mono text-xs sm:text-sm tracking-widest text-grey-500 mb-4">
            03 — PROJETS
          </span>
        </div>

        <!-- Right - Projects List -->
        <div class="md:col-span-9">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-sans font-bold mb-12 sm:mb-16">Réalisations</h2>

          <!-- Projects -->
          <div class="space-y-6 sm:space-y-8">
            <a
              v-for="(project, index) in featuredProjects"
              :key="project.id"
              @click.prevent="handleProjectClick(project.id)"
              class="group block border-t border-grey-200 pt-6 sm:pt-8 cursor-pointer"
            >
              <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4 sm:gap-6">
                <!-- Left - Info -->
                <div class="flex-1">
                  <div class="flex items-start gap-3 sm:gap-4 mb-4">
                    <span class="font-mono text-xs sm:text-sm text-grey-400 mt-1">0{{ index + 1 }}</span>
                    <div class="flex-1">
                      <h3 class="text-xl sm:text-2xl md:text-3xl font-sans font-bold mb-2 sm:mb-3 group-hover:text-accent transition-colors">
                        {{ project.title }}
                      </h3>
                      <p class="text-sm sm:text-base text-grey-600 mb-3 sm:mb-4 leading-relaxed">
                        {{ project.shortDescription }}
                      </p>
                      <div class="flex flex-wrap gap-2">
                        <span v-for="tech in project.technologies.slice(0, 4)" :key="tech"
                          class="px-2 sm:px-3 py-1 text-xs font-mono border border-grey-300 text-grey-600">
                          {{ tech }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Right - Arrow -->
                <div class="md:mt-1 self-end md:self-start">
                  <div class="w-10 h-10 sm:w-12 sm:h-12 border border-grey-300 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all">
                    <svg class="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-grey-600 group-hover:text-dark"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <!-- View All Projects -->
          <div class="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-grey-200">
            <router-link
              to="/projects"
              class="inline-flex items-center gap-2 sm:gap-3 font-mono text-xs sm:text-sm tracking-wider hover:text-accent transition-colors group"
            >
              VOIR TOUS LES PROJETS
              <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-16 sm:py-24 md:py-32 px-4 sm:px-6 border-t border-grey-200">
      <div class="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 md:gap-12">
        <!-- Left - Label -->
        <div class="md:col-span-3">
          <span class="inline-block font-mono text-xs sm:text-sm tracking-widest text-grey-500 mb-4">
            04 — CONTACT
          </span>
        </div>

        <!-- Right - Contact Info -->
        <div class="md:col-span-9">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-sans font-bold mb-6 sm:mb-8">
            Discutons de votre projet
          </h2>

          <p class="text-base sm:text-lg md:text-xl text-grey-600 mb-12 sm:mb-16 max-w-2xl">
            Je suis disponible pour des projets freelance, stages ou opportunités professionnelles.
          </p>

          <!-- Contact Methods -->
          <div class="space-y-4 sm:space-y-6 mb-12 sm:mb-16">
            <a
              href="mailto:ganabarodanimkm@gmail.com"
              class="group flex items-center gap-3 sm:gap-4 text-base sm:text-xl md:text-2xl font-sans hover:text-accent transition-colors break-all"
            >
              <span class="w-6 sm:w-8 h-px bg-grey-300 group-hover:bg-accent group-hover:w-12 sm:group-hover:w-16 transition-all flex-shrink-0"></span>
              ganabarodanimkm@gmail.com
            </a>
            <a
              href="tel:+33753686116"
              class="group flex items-center gap-3 sm:gap-4 text-base sm:text-xl md:text-2xl font-sans hover:text-accent transition-colors"
            >
              <span class="w-6 sm:w-8 h-px bg-grey-300 group-hover:bg-accent group-hover:w-12 sm:group-hover:w-16 transition-all flex-shrink-0"></span>
              +33 7 53 68 61 16
            </a>
          </div>

          <!-- Social Links -->
          <div class="flex flex-wrap gap-4 sm:gap-6">
            <a
              href="https://github.com/GANABA"
              target="_blank"
              rel="noopener noreferrer"
              class="font-mono text-xs sm:text-sm tracking-wider hover:text-accent transition-colors"
            >
              GITHUB
            </a>
            <a
              href="https://www.linkedin.com/in/ganaba-r-melchis%C3%A9dech/"
              target="_blank"
              rel="noopener noreferrer"
              class="font-mono text-xs sm:text-sm tracking-wider hover:text-accent transition-colors"
            >
              LINKEDIN
            </a>
            <a
              href="/CV Rodanim Ganaba.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="font-mono text-xs sm:text-sm tracking-wider hover:text-accent transition-colors"
            >
              CV
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 sm:py-12 px-4 sm:px-6 border-t border-grey-200">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-center md:text-left">
        <p class="text-xs sm:text-sm text-grey-500 font-mono">
          © 2025 Rodanim Ganaba
        </p>
        <p class="text-xs sm:text-sm text-grey-500 font-mono">
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

// Projets en vedette (top 5)
const featuredProjects = computed(() => {
  return projects.filter(p => p.featured).slice(0, 5)
})

// Compétences organisées
const webTechs = ['PHP', 'Laravel', 'Java', 'Spring Boot', 'Vue.js (bases)', 'Node.js (bases)', 'MySQL', 'MongoDB']
const dataTechs = ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'LangChain', 'Matplotlib']
const toolsTechs = ['Git', 'GitLab CI/CD', 'Docker', 'Postman', 'Vite']

// Navigation vers détail projet
const handleProjectClick = (projectId) => {
  router.push(`/project/${projectId}`)
}
</script>

<style scoped>
/* Smooth scroll */
html {
  scroll-behavior: smooth;
}
</style>
