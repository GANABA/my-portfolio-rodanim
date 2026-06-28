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
            PORTFOLIO 2026
          </span>
        </div>

        <!-- Main Title -->
        <h1 class="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-sans font-bold leading-none mb-6 sm:mb-8 opacity-0 animate-reveal" style="animation-delay: 0.4s;">
          Rodanim<br />
          <span class="text-grey-400">Ganaba</span>
        </h1>

        <!-- Subtitle -->
        <div class="max-w-2xl opacity-0 animate-reveal" style="animation-delay: 0.6s;">
          <p class="text-lg sm:text-xl md:text-2xl font-sans font-light text-grey-700 mb-6 sm:mb-8">
            Développeur IA & Applications — Machine Learning, LLM & Full-Stack
          </p>
        </div>

        <!-- Availability badge -->
        <div class="mb-8 sm:mb-12 opacity-0 animate-reveal" style="animation-delay: 0.7s;">
          <span class="inline-flex items-center gap-2.5 border border-grey-300 px-3 sm:px-4 py-2 font-mono text-[11px] sm:text-xs tracking-wider text-grey-700">
            <span class="relative flex h-2 w-2 shrink-0">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            DISPONIBLE — RECHERCHE ALTERNANCE IA / DEV · SEPT. 2026
          </span>
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
            Spécialisé en IA appliquée & développement d'applications
          </h2>

          <div class="space-y-4 text-grey-600 text-base sm:text-lg leading-relaxed max-w-3xl">
            <p>
              Actuellement en <strong class="text-dark font-semibold">BUT Informatique</strong> (IUT Nord Franche-Comté) et
              <strong class="text-dark font-semibold">admis au Master « Intelligent Systems and Applications » de l'Université de Tours</strong>
              (rentrée septembre 2026), je conçois aujourd'hui des
              <strong class="text-dark font-semibold">agents IA conversationnels avec moteur RAG</strong>
              dans un contexte industriel (stage chez Forvia).
            </p>
            <p>
              Je combine le <strong class="text-dark font-semibold">machine learning</strong>, l'<strong class="text-dark font-semibold">IA générative (LLM)</strong>
              et le <strong class="text-dark font-semibold">développement full-stack</strong> pour livrer des solutions concrètes, pensées pour des besoins métier.
            </p>
            <p class="text-dark font-medium">
              Je recherche une <strong class="text-accent">alternance pour mon Master, à partir de septembre 2026</strong>.
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
            <!-- IA & Agents -->
            <div>
              <h3 class="text-xs sm:text-sm font-mono tracking-widest text-grey-500 mb-4 sm:mb-6">IA & AGENTS</h3>
              <div class="flex flex-wrap gap-2 sm:gap-3">
                <span v-for="tech in aiTechs" :key="tech"
                  class="px-3 sm:px-4 py-1.5 sm:py-2 border border-accent/40 text-dark font-mono text-xs sm:text-sm hover:border-accent hover:text-accent transition-colors">
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Data & ML -->
            <div>
              <h3 class="text-xs sm:text-sm font-mono tracking-widest text-grey-500 mb-4 sm:mb-6">DATA & MACHINE LEARNING</h3>
              <div class="flex flex-wrap gap-2 sm:gap-3">
                <span v-for="tech in dataTechs" :key="tech"
                  class="px-3 sm:px-4 py-1.5 sm:py-2 border border-grey-300 text-dark font-mono text-xs sm:text-sm hover:border-accent hover:text-accent transition-colors">
                  {{ tech }}
                </span>
              </div>
            </div>

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

            <!-- Tools -->
            <div>
              <h3 class="text-xs sm:text-sm font-mono tracking-widest text-grey-500 mb-4 sm:mb-6">OUTILS & DEVOPS</h3>
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

                      <!-- Project links -->
                      <div v-if="project.githubLink || project.liveLink" class="flex flex-wrap gap-4 mt-4">
                        <a
                          v-if="project.githubLink"
                          :href="project.githubLink"
                          target="_blank"
                          rel="noopener noreferrer"
                          @click.stop
                          class="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-grey-600 hover:text-accent transition-colors"
                        >
                          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          CODE (GITHUB)
                        </a>
                        <a
                          v-if="project.liveLink"
                          :href="project.liveLink"
                          target="_blank"
                          rel="noopener noreferrer"
                          @click.stop
                          class="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-grey-600 hover:text-accent transition-colors"
                        >
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          DÉMO
                        </a>
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
            Je recherche une <strong class="text-dark font-semibold">alternance (Master IA, sept. 2026)</strong> et reste ouvert aux projets freelance et opportunités professionnelles.
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
              href="/CV-Rodanim-Ganaba-Alternance-2026.pdf"
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
          © 2026 Rodanim Ganaba
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

// Projets en vedette — projets IA d'abord (Assistant Financier IA, ParkMR, TINA, GPFE)
const featuredOrder = [9, 8, 2, 3]
const featuredProjects = computed(() => {
  return featuredOrder
    .map(id => projects.find(p => p.id === id))
    .filter(Boolean)
})

// Compétences organisées (IA d'abord)
const aiTechs = ['LLM', 'RAG', 'LangChain / LangGraph', 'n8n', 'MCP', 'Agents IA']
const dataTechs = ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'LightGBM', 'TensorFlow', 'Power BI', 'Streamlit']
const webTechs = ['PHP', 'Laravel', 'Java', 'Spring Boot', 'Vue.js', 'Node.js', 'MySQL', 'MongoDB', 'API REST']
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
