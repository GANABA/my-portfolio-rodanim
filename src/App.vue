<template>
  <div class="min-h-screen">
    <Navbar />

    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>

<style>
/* Smooth scroll global */
html {
  scroll-behavior: smooth;
}

/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
