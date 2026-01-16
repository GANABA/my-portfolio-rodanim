<template>
  <div class="min-h-screen bg-primary">

    <!-- Hero Section -->
    <section class="relative py-20 bg-secondary overflow-hidden">
      <div class="absolute top-10 right-20 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-10 left-20 w-80 h-80 bg-accent-purple/10 rounded-full blur-3xl animate-pulse"
        style="animation-delay: 1s;"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
          <div class="w-2 h-2 rounded-full bg-accent-blue animate-pulse"></div>
          <span class="text-accent-blue text-sm font-semibold tracking-wider uppercase">Découvrez mon profil</span>
        </div>

        <h1 class="text-5xl md:text-6xl font-bold text-text-primary mb-6 animate-slide-in">
          À propos <span class="gradient-text">de moi</span>
        </h1>

        <p class="text-text-secondary text-xl max-w-3xl mx-auto animate-slide-in" style="animation-delay: 0.1s;">
          Étudiant passionné, développeur curieux, toujours en quête d'apprentissage
        </p>
      </div>
    </section>

    <!-- Qui suis-je Section -->
    <section class="py-20 bg-primary">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="card-modern p-10 hover:scale-[1.01] transition-all fade-in-section">
          <div class="flex items-start gap-4 mb-6">
            <div class="text-5xl">👋</div>
            <div>
              <h2 class="text-3xl md:text-4xl font-bold gradient-text mb-4">
                Qui suis-je ?
              </h2>
            </div>
          </div>

          <div class="space-y-6 text-text-secondary text-lg leading-relaxed">
            <p>
              Bonjour ! Je suis <strong class="text-text-primary font-bold">Rodanim Ganaba</strong>, étudiant en BUT 3
              Informatique à l'IUT Nord Franche-Comté.
              J'explore activement le développement informatique, le machine learning et la data science à travers
              divers projets et formations.
            </p>
            <p>
              Passionné par les nouvelles technologies, j'aime relever de nouveaux défis techniques pour progresser
              constamment et créer des solutions utiles et innovantes.
            </p>
            <p>
              En dehors du code, j'apprécie le travail d'équipe, les jeux d'équipe (particulièrement le football), le
              partage de connaissances et la résolution de problèmes complexes.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Ma Vision -->
    <section class="py-20 bg-secondary">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="text-center mb-12 fade-in-section">
          <h2 class="text-4xl font-bold text-text-primary mb-4">Ma Vision</h2>
          <p class="text-text-secondary">Ce qui me motive au quotidien</p>
        </div>

        <div class="grid md:grid-cols-2 gap-6 fade-in-section">
          <div class="card-modern p-8 group hover:scale-[1.02] transition-all">
            <div
              class="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-text-primary mb-3">Innovation continue</h3>
            <p class="text-text-secondary">
              Je crois au pouvoir de la technologie pour résoudre des problèmes concrets. Chaque projet est une
              opportunité d'innover et d'apprendre.
            </p>
          </div>

          <div class="card-modern p-8 group hover:scale-[1.02] transition-all">
            <div
              class="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-blue/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-text-primary mb-3">Apprentissage permanent</h3>
            <p class="text-text-secondary">
              Le domaine de l'informatique évolue rapidement. Je reste curieux et m'adapte constamment aux nouvelles
              tendances et technologies.
            </p>
          </div>

          <div class="card-modern p-8 group hover:scale-[1.02] transition-all">
            <div
              class="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-accent-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-text-primary mb-3">Collaboration</h3>
            <p class="text-text-secondary">
              Les meilleurs projets naissent de la collaboration. J'aime travailler en équipe et partager mes
              connaissances avec les autres.
            </p>
          </div>

          <div class="card-modern p-8 group hover:scale-[1.02] transition-all">
            <div
              class="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-text-primary mb-3">Qualité du code</h3>
            <p class="text-text-secondary">
              Je m'efforce d'écrire un code propre, maintenable et bien documenté. La qualité est aussi importante que
              la fonctionnalité.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Centres d'intérêt techniques -->
    <section class="py-20 bg-primary">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="text-center mb-12 fade-in-section">
          <h2 class="text-4xl font-bold text-text-primary mb-4">Mes Domaines d'expertise</h2>
          <p class="text-text-secondary">Les technologies qui me passionnent</p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 fade-in-section">
          <!-- Développement Backend -->
          <div class="card-modern p-8 text-center group hover:scale-105 transition-all">
            <div
              class="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg class="w-10 h-10 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-text-primary mb-3">Développement Backend</h3>
            <p class="text-text-secondary text-sm mb-4">
              Conception d'architectures serveur robustes, APIs RESTful et gestion de bases de données relationnelles et
              NoSQL.
            </p>
            <div class="flex flex-wrap gap-2 justify-center">
              <span class="px-2 py-1 glass text-xs text-text-primary rounded">PHP</span>
              <span class="px-2 py-1 glass text-xs text-text-primary rounded">Laravel</span>
              <span class="px-2 py-1 glass text-xs text-text-primary rounded">Spring Boot</span>
              <span class="px-2 py-1 glass text-xs text-text-primary rounded">MySQL</span>
              <span class="px-2 py-1 glass text-xs text-text-primary rounded">MongoDB</span>
            </div>
          </div>

          <!-- IoT & Embarqué -->
          <div class="card-modern p-8 text-center group hover:scale-105 transition-all">
            <div
              class="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-accent-cyan/20 to-accent-blue/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg class="w-10 h-10 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-text-primary mb-3">IoT & Embarqué</h3>
            <p class="text-text-secondary text-sm mb-4">
              Systèmes embarqués et objets connectés pour créer des solutions intelligentes et automatisées.
            </p>
            <div class="flex flex-wrap gap-2 justify-center">
              <span class="px-2 py-1 glass text-xs text-text-primary rounded">Arduino</span>
              <span class="px-2 py-1 glass text-xs text-text-primary rounded">Raspberry Pi</span>
              <span class="px-2 py-1 glass text-xs text-text-primary rounded">Capteurs</span>
            </div>
          </div>

          <!-- Data Science & IA -->
          <div class="card-modern p-8 text-center group hover:scale-105 transition-all">
            <div
              class="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg class="w-10 h-10 text-accent-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-text-primary mb-3">Data Science & IA</h3>
            <p class="text-text-secondary text-sm mb-4">
              Analyse de données, machine learning et deep learning pour créer des modèles prédictifs et des systèmes
              intelligents.
            </p>
            <div class="flex flex-wrap gap-2 justify-center">
              <span class="px-2 py-1 glass text-xs text-text-primary rounded">Python</span>
              <span class="px-2 py-1 glass text-xs text-text-primary rounded">Pandas</span>
              <span class="px-2 py-1 glass text-xs text-text-primary rounded">Scikit-learn</span>
              <span class="px-2 py-1 glass text-xs text-text-primary rounded">TensorFlow</span>
              <span class="px-2 py-1 glass text-xs text-text-primary rounded">Deep Learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="py-20 bg-secondary">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="text-center mb-12 fade-in-section">
          <h2 class="text-4xl font-bold text-text-primary mb-4">En quelques chiffres</h2>
          <p class="text-text-secondary">Mon parcours résumé</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 fade-in-section">
          <div class="card-modern p-6 text-center">
            <div class="text-5xl font-bold gradient-text mb-2">5+</div>
            <div class="text-text-secondary text-sm">Projets réalisés</div>
          </div>
          <div class="card-modern p-6 text-center">
            <div class="text-5xl font-bold gradient-text mb-2">7+</div>
            <div class="text-text-secondary text-sm">Technologies</div>
          </div>
          <div class="card-modern p-6 text-center">
            <div class="text-5xl font-bold gradient-text mb-2">3+</div>
            <div class="text-text-secondary text-sm">Années d'études</div>
          </div>
          <div class="card-modern p-6 text-center">
            <div class="text-5xl font-bold gradient-text mb-2">2</div>
            <div class="text-text-secondary text-sm">Stages pros</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline minimaliste -->
    <section class="py-20 bg-primary">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="text-center mb-12 fade-in-section">
          <h2 class="text-4xl font-bold text-text-primary mb-4">Mon Parcours</h2>
          <p class="text-text-secondary">Les étapes clés de ma formation</p>
        </div>

        <div class="relative fade-in-section">
          <!-- Ligne verticale -->
          <div
            class="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue via-accent-purple to-transparent">
          </div>

          <div class="space-y-8">
            <!-- 2025 -->
            <div class="relative flex items-center gap-6 md:justify-end md:pr-[calc(50%+3rem)]">
              <div
                class="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-accent-blue border-4 border-primary">
              </div>
              <div class="ml-20 md:ml-0 card-modern p-6 flex-1 max-w-md">
                <div class="text-accent-blue font-bold text-sm mb-1">2025 - Présent</div>
                <h3 class="text-lg font-bold text-text-primary mb-2">BUT 3 Informatique</h3>
                <p class="text-text-secondary text-sm">IUT Nord Franche-Comté</p>
              </div>
            </div>

            <!-- 2021-2024 -->
            <div class="relative flex items-center gap-6 md:pl-[calc(50%+3rem)]">
              <div
                class="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-accent-purple border-4 border-primary">
              </div>
              <div class="ml-20 md:ml-0 card-modern p-6 flex-1 max-w-md">
                <div class="text-accent-purple font-bold text-sm mb-1">2021 - 2024</div>
                <h3 class="text-lg font-bold text-text-primary mb-2">Licence Pro Informatique</h3>
                <p class="text-text-secondary text-sm">IUT de Parakou</p>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA vers pages dédiées -->
        <div class="text-center mt-16 space-y-4 fade-in-section">
          <p class="text-text-secondary mb-6">Pour plus de détails :</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/skills"
              class="px-8 py-4 bg-gradient-primary text-white font-semibold rounded-xl hover:scale-105 transition-all hover:shadow-glow-lg inline-flex items-center justify-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              Voir mes compétences
            </router-link>

            <router-link to="/experiences"
              class="px-8 py-4 glass hover:glass-strong text-text-primary font-semibold rounded-xl border border-accent-blue/20 hover:border-accent-blue/40 transition-all hover:scale-105 inline-flex items-center justify-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Mon parcours détaillé
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="py-20 bg-secondary">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-section">
        <div class="card-modern p-12">
          <h2 class="text-3xl font-bold text-text-primary mb-6">
            Envie de collaborer ?
          </h2>
          <p class="text-text-secondary mb-8">
            Découvrez mes projets ou contactez-moi pour discuter d'opportunités
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/projects"
              class="px-8 py-4 bg-gradient-primary text-white font-semibold rounded-xl hover:scale-105 transition-all hover:shadow-glow-lg">
              Voir mes projets
            </router-link>
            <router-link to="/contact"
              class="px-8 py-4 glass hover:glass-strong text-text-primary font-semibold rounded-xl border border-accent-blue/20 hover:border-accent-blue/40 transition-all">
              Me contacter
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
  )

  document.querySelectorAll('.fade-in-section').forEach(el => {
    observer.observe(el)
  })
})
</script>