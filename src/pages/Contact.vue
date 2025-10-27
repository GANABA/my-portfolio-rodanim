<template>
  <div class="bg-dark">
    <!-- Hero Section avec formes géométriques -->
    <section class="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-dark">
      <!-- Formes géométriques animées en arrière-plan -->
      <div class="absolute top-10 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-10 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse"
        style="animation-delay: 1s;"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 text-center">
        <span class="text-accent font-semibold tracking-wider uppercase text-sm">Restons en contact</span>
        <h1 class="text-5xl md:text-6xl font-bold text-white mt-4 mb-6 fade-in-up">
          Contactez-moi
        </h1>
        <p class="text-gray-400 text-xl max-w-2xl mx-auto fade-in-up" style="animation-delay: 0.2s;">
          Une question, un projet ou simplement envie d'échanger ? N'hésitez pas à me contacter !
        </p>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>

    <!-- Section principale -->
    <section class="py-20 bg-gray-dark">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-5 gap-8">

          <!-- Formulaire de contact (3/5) -->
          <div class="lg:col-span-3 scroll-fade-in">
            <div
              class="relative bg-dark border border-accent/20 rounded-2xl p-8 md:p-10 hover:border-accent/50 transition-all duration-500 group overflow-hidden">
              <!-- Glow effect -->
              <div
                class="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500">
              </div>

              <div class="relative z-10">
                <h2 class="text-3xl md:text-4xl font-bold text-accent mb-8 flex items-center gap-3">
                  <span class="text-4xl">📧</span>
                  Envoyez-moi un message
                </h2>

                <form @submit.prevent="sendEmail" class="space-y-6">

                  <!-- Nom -->
                  <div class="group">
                    <label for="name" class="block text-white font-semibold mb-2">
                      Nom complet <span class="text-accent">*</span>
                    </label>
                    <input type="text" id="name" v-model="form.name" required
                      class="w-full px-5 py-4 bg-gray-dark text-white border-2 border-gray-dark rounded-xl focus:outline-none focus:border-accent focus:bg-dark transition-all placeholder-gray-500"
                      placeholder="Votre nom">
                  </div>

                  <!-- Email -->
                  <div class="group">
                    <label for="email" class="block text-white font-semibold mb-2">
                      Email <span class="text-accent">*</span>
                    </label>
                    <input type="email" id="email" v-model="form.email" required
                      class="w-full px-5 py-4 bg-gray-dark text-white border-2 border-gray-dark rounded-xl focus:outline-none focus:border-accent focus:bg-dark transition-all placeholder-gray-500"
                      placeholder="votre.email@exemple.com">
                  </div>

                  <!-- Sujet -->
                  <div class="group">
                    <label for="subject" class="block text-white font-semibold mb-2">
                      Sujet <span class="text-accent">*</span>
                    </label>
                    <input type="text" id="subject" v-model="form.subject" required
                      class="w-full px-5 py-4 bg-gray-dark text-white border-2 border-gray-dark rounded-xl focus:outline-none focus:border-accent focus:bg-dark transition-all placeholder-gray-500"
                      placeholder="Objet de votre message">
                  </div>

                  <!-- Message -->
                  <div class="group">
                    <label for="message" class="block text-white font-semibold mb-2">
                      Message <span class="text-accent">*</span>
                    </label>
                    <textarea id="message" v-model="form.message" required rows="6"
                      class="w-full px-5 py-4 bg-gray-dark text-white border-2 border-gray-dark rounded-xl focus:outline-none focus:border-accent focus:bg-dark transition-all resize-none placeholder-gray-500"
                      placeholder="Votre message..."></textarea>
                  </div>

                  <!-- Message de succès -->
                  <div v-if="successMessage"
                    class="bg-accent/10 border-2 border-accent text-accent px-5 py-4 rounded-xl flex items-start gap-3 animate-fade-in">
                    <svg class="w-6 h-6 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd" />
                    </svg>
                    <span>{{ successMessage }}</span>
                  </div>

                  <!-- Message d'erreur -->
                  <div v-if="errorMessage"
                    class="bg-red-500/10 border-2 border-red-500 text-red-500 px-5 py-4 rounded-xl flex items-start gap-3 animate-fade-in">
                    <svg class="w-6 h-6 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clip-rule="evenodd" />
                    </svg>
                    <span>{{ errorMessage }}</span>
                  </div>

                  <!-- Bouton d'envoi -->
                  <button type="submit" :disabled="isLoading"
                    class="w-full bg-accent text-dark px-8 py-5 rounded-xl font-bold hover:scale-105 transition-all disabled:bg-gray-dark disabled:text-gray-500 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center text-lg">
                    <svg v-if="isLoading" class="animate-spin h-6 w-6 mr-3" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"
                        fill="none">
                      </circle>
                      <path class="opacity-75" fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                      </path>
                    </svg>
                    <span v-if="isLoading">Envoi en cours...</span>
                    <span v-else class="flex items-center">
                      Envoyer le message
                      <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>

          <!-- Informations de contact (2/5) -->
          <div class="lg:col-span-2 space-y-6">

            <!-- Carte Email -->
            <div
              class="group relative bg-dark border border-accent/20 rounded-2xl p-6 hover:border-accent/50 hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden scroll-fade-in">
              <!-- Glow effect -->
              <div
                class="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500">
              </div>

              <div class="relative z-10 flex items-start gap-4">
                <div
                  class="bg-accent/10 p-4 rounded-xl group-hover:scale-110 transition-transform border border-accent/30">
                  <svg class="w-7 h-7 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="font-bold text-white text-lg mb-1">Email</h3>
                  <a href="mailto:ganabarodanimkm@gmail.com"
                    class="text-accent hover:text-white transition-colors break-all">
                    ganabarodanimkm@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <!-- Carte GitHub -->
            <div
              class="group relative bg-dark border border-accent/20 rounded-2xl p-6 hover:border-accent/50 hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden scroll-fade-in"
              style="animation-delay: 0.1s;">
              <!-- Glow effect -->
              <div
                class="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500">
              </div>

              <div class="relative z-10 flex items-start gap-4">
                <div
                  class="bg-gray-dark p-4 rounded-xl group-hover:scale-110 transition-transform border border-gray-dark">
                  <svg class="w-7 h-7 text-white group-hover:text-accent transition-colors" fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="font-bold text-white text-lg mb-1">GitHub</h3>
                  <a href="https://github.com/GANABA" target="_blank"
                    class="text-accent hover:text-white transition-colors break-all">
                    Ganaba
                  </a>
                </div>
              </div>
            </div>

            <!-- Carte LinkedIn -->
            <div
              class="group relative bg-dark border border-accent/20 rounded-2xl p-6 hover:border-accent/50 hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden scroll-fade-in"
              style="animation-delay: 0.2s;">
              <!-- Glow effect -->
              <div
                class="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500">
              </div>

              <div class="relative z-10 flex items-start gap-4">
                <div
                  class="bg-blue-600/20 p-4 rounded-xl group-hover:scale-110 transition-transform border border-blue-600/30">
                  <svg class="w-7 h-7 text-blue-600 group-hover:text-accent transition-colors" fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="font-bold text-white text-lg mb-1">LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/ganaba-r-melchis%C3%A9dech/" target="_blank"
                    class="text-accent hover:text-white transition-colors break-all">
                    Ganaba Rodanim
                  </a>
                </div>
              </div>
            </div>

            <!-- Message d'encouragement -->
            <div
              class="relative bg-gradient-to-br from-accent/20 to-accent/5 border-2 border-accent/30 rounded-2xl p-6 overflow-hidden scroll-fade-in"
              style="animation-delay: 0.3s;">
              <!-- Animated background -->
              <div class="absolute inset-0 bg-accent/10 animate-pulse"></div>

              <div class="relative z-10">
                <div class="flex items-center gap-2 mb-3">
                  <span class="text-3xl">💼</span>
                  <h3 class="font-bold text-white text-xl">Ouvert aux opportunités</h3>
                </div>
                <p class="text-gray-300 leading-relaxed">
                  Je suis actuellement à la recherche de stages et d'opportunités professionnelles.
                  N'hésitez pas à me contacter pour discuter de projets ou collaborations !
                </p>
              </div>
            </div>

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

const isLoading = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const sendEmail = async () => {
  isLoading.value = true
  successMessage.value = ''
  errorMessage.value = ''

  try {
    // Configuration EmailJS
    // Remplace ces valeurs par tes vraies clés EmailJS
    const serviceID = 'YOUR_SERVICE_ID'
    const templateID = 'YOUR_TEMPLATE_ID'
    const publicKey = 'YOUR_PUBLIC_KEY'

    const templateParams = {
      from_name: form.value.name,
      from_email: form.value.email,
      subject: form.value.subject,
      message: form.value.message,
      to_name: 'Rodanim Ganaba' // Ton nom
    }

    await emailjs.send(serviceID, templateID, templateParams, publicKey)

    successMessage.value = '✅ Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.'

    // Réinitialiser le formulaire
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error)
    errorMessage.value = '❌ Une erreur est survenue. Veuillez réessayer ou me contacter directement par email.'
  } finally {
    isLoading.value = false
  }
}

// Animation au scroll
onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, observerOptions)

  document.querySelectorAll('.scroll-fade-in').forEach(el => {
    observer.observe(el)
  })
})
</script>

<style scoped>
/* Animations d'entrée */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}

/* Animation au scroll */
.scroll-fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.scroll-fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>