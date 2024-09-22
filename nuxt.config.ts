// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'cs'
      },
      title: 'Adam Hádl',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scele=1' },
        { hid: 'description', name: 'description', content: 'web jednoho frontend developera'}
      ]
    }
  },
  image: {
    presets: {
      thumbnail: {
        modifiers: {
          format: 'webp',
          width: 660,
          height: 440
        }
      }
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/base.scss" as *;'
        }
      }
    }
  },
  modules: ['@nuxt/image'],
})
