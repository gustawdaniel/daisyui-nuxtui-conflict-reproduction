// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // modules: ['@nuxtjs/tailwindcss', '@nuxthq/ui'], // throws error
  modules: ['@nuxthq/ui', '@nuxtjs/tailwindcss'] // works
})
