// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@vueuse/nuxt",
    "nuxt-headlessui",
    "@morev/vue-transitions/nuxt"
  ],
  app: {
    head:{
      title: "analytics",
      link: [
        // inter font
        { rel : "stylesheet", href: "https://rsms.me/inter/inter.css"},
        { rel : "preconnect", href: "https://rsms.me/"}
      ]
    }
  }
})
