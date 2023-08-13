// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@vuepic/vue-datepicker/dist/main.css'],
  devtools: { enabled: true },
  modules: ['@nuxthq/ui'],
  build: {
    transpile: ['@vuepic/vue-datepicker']
  }
})
