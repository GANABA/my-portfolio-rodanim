import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import { applyLocale } from './composables/useLocale.js'
import './style.css'

const app = createApp(App)
app.use(i18n)
app.use(router)

// Aligne <html lang> sur la locale résolue au démarrage
applyLocale(i18n.global.locale.value)

app.mount('#app')
