import { fr, en } from './i18n'

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Sylvain RAYA',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Mon portfolio' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:url', name: 'og:url', content: process.env.WEBSITE_URL },
      { hid: 'og:title', name: 'og:title', content: 'Portfolio' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Portfolio' },
      { hid: 'og:locale', name: 'og:locale', content: 'fr' },
      { hid: 'og:image', name: 'og:image', content: `https://cdn.discordapp.com/attachments/656052224689963021/736589688101535844/0.png` },
    ],
    link: [
      { rel: 'icon', type: 'image/icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://unpkg.com/@popperjs/core@2/dist/umd/popper.min.js' },
      { src: 'https://unpkg.com/tippy.js@6/dist/tippy-bundle.umd.js' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: ['nuxt-i18n'],
  i18n: {
    locales: [
      { code: 'fr', name: 'Français'} ,
      { code: 'en', name: 'English'}
    ],
    defaultLocale: 'fr',
    vueI18n: {
      fallbackLocale: 'fr',
      messages: { fr, en }
    },
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieDomain: null,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: false,
      fallbackLocale: 'fr'
    },
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    babel: {
      presets({ isServer }) {
        return [
          [
            "@nuxt/babel-preset-app", { loose: true }
          ]
          
        ]
      }
    }
  }
}
