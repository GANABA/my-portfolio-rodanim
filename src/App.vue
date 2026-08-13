<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />

    <main class="flex-1">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const { t, locale } = useI18n()

// Le HTML servi reste en français (pas de SSR) : les crawlers indexent le FR.
// On aligne tout de même le titre d'onglet et la meta description sur la
// langue choisie côté visiteur.
watch(
  locale,
  () => {
    document.title = t('meta.title')
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', t('meta.description'))
  },
  { immediate: true }
)
</script>
