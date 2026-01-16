<template>
  <div class="min-h-screen bg-primary">
    
    <!-- Hero Section -->
    <section class="relative py-20 bg-secondary overflow-hidden">
      <div class="absolute top-10 right-20 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-10 left-20 w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
          <div class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
          <span class="text-green-400 text-sm font-semibold tracking-wider uppercase">Disponible</span>
        </div>
        
        <h1 class="text-5xl md:text-6xl font-bold text-text-primary mb-6 animate-slide-in">
          Travaillons <span class="gradient-text">ensemble</span>
        </h1>
        
        <p class="text-text-secondary text-xl max-w-3xl mx-auto animate-slide-in" style="animation-delay: 0.1s;">
          Une question ? Un projet ? N'hésitez pas à me contacter, je serai ravi d'échanger avec vous
        </p>
      </div>
    </section>

    <!-- Section principale -->
    <section class="py-20 bg-primary">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-5 gap-8">
          
          <!-- FORMULAIRE EN PREMIER -->
          <div class="lg:col-span-3 order-1 lg:order-2 fade-in-section">
            <div class="card-modern p-8">
              <h2 class="text-2xl font-bold text-text-primary mb-6">Envoyez-moi un message</h2>
              
              <!-- Message de succès -->
              <div 
                v-if="formStatus === 'success'"
                class="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-start gap-3"
              >
                <svg class="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p class="text-green-400 font-semibold">Message envoyé avec succès !</p>
                  <p class="text-text-secondary text-sm mt-1">Je vous répondrai dans les plus brefs délais.</p>
                </div>
              </div>

              <!-- Message d'erreur -->
              <div 
                v-if="formStatus === 'error'"
                class="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-start gap-3"
              >
                <svg class="w-6 h-6 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p class="text-red-400 font-semibold">Erreur lors de l'envoi</p>
                  <p class="text-text-secondary text-sm mt-1">Veuillez réessayer ou me contacter directement par email.</p>
                </div>
              </div>

              <form @submit.prevent="sendEmail" class="space-y-6">
                <!-- Nom -->
                <div>
                  <label for="name" class="block text-text-primary font-medium mb-2">
                    Nom complet <span class="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    v-model="form.name"
                    required
                    class="w-full px-4 py-3 glass rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-blue transition-all"
                    placeholder="Jean Dupont"
                  />
                </div>

                <!-- Email -->
                <div>
                  <label for="email" class="block text-text-primary font-medium mb-2">
                    Email <span class="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    v-model="form.email"
                    required
                    class="w-full px-4 py-3 glass rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-blue transition-all"
                    placeholder="jean.dupont@example.com"
                  />
                </div>

                <!-- Sujet -->
                <div>
                  <label for="subject" class="block text-text-primary font-medium mb-2">
                    Sujet <span class="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    v-model="form.subject"
                    required
                    class="w-full px-4 py-3 glass rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-blue transition-all"
                    placeholder="Proposition de collaboration"
                  />
                </div>

                <!-- Message -->
                <div>
                  <label for="message" class="block text-text-primary font-medium mb-2">
                    Message <span class="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    v-model="form.message"
                    required
                    rows="6"
                    class="w-full px-4 py-3 glass rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-blue transition-all resize-none"
                    placeholder="Bonjour, j'aimerais discuter d'un projet..."
                  ></textarea>
                </div>

                <!-- Bouton submit -->
                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full px-8 py-4 bg-gradient-primary text-white font-semibold rounded-xl transition-all hover:scale-105 hover:shadow-glow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <svg 
                    v-if="isSubmitting"
                    class="animate-spin h-5 w-5 text-white" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24"
                  >
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <svg 
                    v-else
                    class="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <span>{{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}</span>
                </button>

                <p class="text-text-muted text-sm text-center">
                  En envoyant ce formulaire, vous acceptez que vos données soient utilisées pour vous recontacter.
                </p>
              </form>
            </div>
          </div>

          <!-- INFORMATIONS EN DEUXIÈME (order sur mobile) -->
          <div class="lg:col-span-2 order-2 lg:order-1 space-y-6">
            
            <!-- Intro -->
            <div class="card-modern p-8 fade-in-section">
              <h2 class="text-2xl font-bold text-text-primary mb-4">Restons connectés</h2>
              <p class="text-text-secondary leading-relaxed mb-6">
                Je suis toujours ouvert aux discussions sur de nouveaux projets, des opportunités de collaboration ou simplement pour échanger sur la tech !
              </p>
              
              <div class="space-y-4">
                <!-- Email -->
                <a 
                  href="mailto:ganabarodanimkm@gmail.com"
                  class="flex items-center gap-4 p-4 glass hover:glass-strong rounded-xl transition-all hover:scale-105 group"
                >
                  <div class="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-text-muted text-xs">Email</p>
                    <p class="text-text-primary font-semibold group-hover:text-accent-blue transition-colors text-sm break-all">ganabarodanimkm@gmail.com</p>
                  </div>
                </a>

                <!-- Téléphone -->
                <a 
                  href="tel:+33753686116"
                  class="flex items-center gap-4 p-4 glass hover:glass-strong rounded-xl transition-all hover:scale-105 group"
                >
                  <div class="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="text-text-muted text-xs">Téléphone</p>
                    <p class="text-text-primary font-semibold group-hover:text-accent-blue transition-colors">+33 7 53 68 61 16</p>
                  </div>
                </a>

                <!-- Localisation -->
                <div class="flex items-center gap-4 p-4 glass rounded-xl">
                  <div class="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-text-muted text-xs">Localisation</p>
                    <p class="text-text-primary font-semibold">Belfort, France</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Réseaux sociaux -->
            <div class="card-modern p-8 fade-in-section">
              <h3 class="text-xl font-bold text-text-primary mb-6">Retrouvez-moi sur</h3>
              <div class="space-y-3">
                <a 
                  href="https://github.com/GANABA"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-4 p-4 glass hover:glass-strong rounded-xl transition-all hover:scale-105 group"
                >
                  <div class="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <p class="text-text-primary font-semibold group-hover:text-accent-blue transition-colors">GitHub</p>
                    <p class="text-text-muted text-xs">@GANABA</p>
                  </div>
                  <svg class="w-5 h-5 text-text-muted group-hover:text-accent-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>

                <a 
                  href="https://www.linkedin.com/in/ganaba-r-melchis%C3%A9dech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-4 p-4 glass hover:glass-strong rounded-xl transition-all hover:scale-105 group"
                >
                  <div class="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <p class="text-text-primary font-semibold group-hover:text-accent-blue transition-colors">LinkedIn</p>
                    <p class="text-text-muted text-xs">Rodanim Ganaba</p>
                  </div>
                  <svg class="w-5 h-5 text-text-muted group-hover:text-accent-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            <!-- Disponibilité -->
            <div class="card-modern p-6 fade-in-section">
              <div class="flex items-center gap-3">
                <div class="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                <div>
                  <p class="text-text-primary font-semibold">Disponible pour de nouveaux projets</p>
                  <p class="text-text-muted text-sm">Réponse sous 24h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA alternatif -->
    <section class="py-20 bg-secondary">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-section">
        <div class="card-modern p-12">
          <h2 class="text-3xl font-bold text-text-primary mb-4">
            Vous préférez un autre moyen ?
          </h2>
          <p class="text-text-secondary mb-8">
            Retrouvez mon CV ou découvrez mes projets
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/CV Rodanim Ganaba.pdf" 
              download
              class="px-8 py-4 bg-gradient-primary text-white font-semibold rounded-xl hover:scale-105 transition-all hover:shadow-glow-lg inline-flex items-center justify-center gap-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Télécharger mon CV
            </a>
            <router-link 
              to="/projects"
              class="px-8 py-4 glass hover:glass-strong text-text-primary font-semibold rounded-xl border border-accent-blue/20 hover:border-accent-blue/40 transition-all inline-flex items-center justify-center gap-2"
            >
              Voir mes projets
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import emailjs from '@emailjs/browser'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const formStatus = ref(null) // null, 'success', 'error'

const sendEmail = async () => {
  isSubmitting.value = true
  formStatus.value = null

  try {

    // Configuration EmailJS
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    // Configuration EmailJS 
    await emailjs.send(
      serviceID,  
      templateID, 
      {
        from_name: form.value.name,
        from_email: form.value.email,
        subject: form.value.subject,
        message: form.value.message,
      },
      publicKey 
    )

    formStatus.value = 'success'

    // Réinitialisation du formulaire
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }

    // Faire disparaître le message de succès après 5 secondes
    setTimeout(() => {
      formStatus.value = null
    }, 5000)

  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error)
    formStatus.value = 'error'

    // Faire disparaître le message d'erreur après 5 secondes
    setTimeout(() => {
      formStatus.value = null
    }, 5000)
  } finally {
    isSubmitting.value = false
  }
}

onMounted(() => {
  // Initialiser EmailJS 
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
  )

  document.querySelectorAll('.fade-in-section').forEach((el) => observer.observe(el))
})
</script>