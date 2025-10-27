<template>
  <section class="bg-gradient-to-br from-primary to-accent text-white py-20 md:py-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Rodanim Ganaba
        </h1>
        <p class="text-xl md:text-2xl mb-8 text-gray-200">
          Étudiant en BUT Informatique – Développeur Web & Data
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="/public/CV Rodanim Ganaba.pdf" download
            class="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
            📄 Télécharger mon CV
          </a>
          <router-link to="/contact"
            class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all transform hover:scale-105">
            Me contacter
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}
</style>