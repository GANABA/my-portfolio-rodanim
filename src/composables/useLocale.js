import { useI18n } from 'vue-i18n'
import i18n, { SUPPORTED_LOCALES, STORAGE_KEY } from '../i18n/index.js'

/**
 * Applique une locale : état vue-i18n, persistance, et attribut lang du
 * document (nécessaire aux lecteurs d'écran et au SEO).
 */
export function applyLocale(locale) {
  if (!SUPPORTED_LOCALES.includes(locale)) return

  i18n.global.locale.value = locale
  localStorage.setItem(STORAGE_KEY, locale)
  document.documentElement.setAttribute('lang', locale)
}

/**
 * À utiliser dans les composants : expose la locale courante, la liste des
 * locales disponibles et le setter.
 */
export function useLocale() {
  const { locale, t } = useI18n()

  return {
    locale,
    locales: SUPPORTED_LOCALES,
    setLocale: applyLocale,
    t,
  }
}
