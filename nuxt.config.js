export default {
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s | buerobroger',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap'
      },
      // { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicons/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicons/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      }
    ]
  },

  // realfavicon generator
  // <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  // <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  // <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  // <link rel="manifest" href="/site.webmanifest">
  // <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#97ce40">
  // <meta name="msapplication-TileColor" content="#9ac852">
  // <meta name="theme-color" content="#ffffff"></meta>

  /*
   ** Load nuxt modules
   */
  modules: [],

  /*
   ** Load nuxt build-modules
   */
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],

  /*
   ** This option is given directly to the vue-router Router constructor
   */
  router: {
    base: '',
    linkActiveClass: 'is-active'
  },

  /*
   ** Customize the progress bar color
   */
  loading: { color: '#3B8070' },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** PostCSS setup
     */
    postcss: {
      // Add plugin names as key and arguments as value
      // Disable a plugin by passing false as value
      plugins: {
        cssnano: {
          preset: 'default',
          discardComments: { removeAll: true },
          zIndex: false
        }
      },
      // Change the postcss-preset-env settings
      preset: {
        autoprefixer: {
          cascade: false,
          grid: true
        }
      }
    },

    /*
     ** Run ESLint on save
     */
    extend(config, ctx) {}
  }
}
