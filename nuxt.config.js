const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    // title: pkg.name,
    title: 'Tulipes & Cie',
    meta: [
      { charset: 'utf-8' },
      { name: 'theme-color', content: '#ffffff' },
      { name: 'msapplication-TileColor', content: '#49F9C4' },
      { name: 'msapplication-config', content: '/assets/favicons/browserconfig.xml' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Agence Tulipes & Cie de communication audiovisuelle à Paris. Chez Tulipes & Cie, ce que nous aimons, c’est produire des films de communication originaux et créatifs pour marquer les esprits.' },
      { hid: 'keywords', name: 'keywords', content: 'Tulipes & Cie, Agence de communication audiovisuelle à Paris' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@tulipescie' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Agence de communication audiovisuelle à Paris – Tulipes & Cie' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Agence Tulipes & Cie de communication audiovisuelle à Paris. Chez Tulipes & Cie, ce que nous aimons, c’est produire des films de communication originaux et créatifs pour marquer les esprits.' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'img' },
      { hid: 'og:title', name: 'og:title', content: 'Agence de communication audiovisuelle à Paris – Tulipes & Cie' },
      { hid: 'og:url', name: 'og:url', content: 'http://www.tulipes-cie.com/' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:image', name: 'og:image', content: 'img' },
      { hid: 'og:description', name: 'og:description', content: 'Agence Tulipes & Cie de communication audiovisuelle à Paris. Chez Tulipes & Cie, ce que nous aimons, c’est produire des films de communication originaux et créatifs pour marquer les esprits.' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Tulipes & Cie' }
    ],
    link: [
      // { rel: 'apple-touch-icon', sizes: '180x180', href: '/assets/favicons/apple-touch-icon.png' },
      // { rel: 'icon', type: "image/png", sizes: '32x32', href: 'favicon-32x32.png' },
      // { rel: 'icon', type: "image/png", sizes: '16x16', href: 'favicon-16x16.png' },
      // { rel: 'manifest', href: '/assets/favicons/site.webmanifest' },
      // { rel: 'mask-icon', href: '/assets/favicons/safari-pinned-tab.svg', color:"#2C62FF" },
      { rel: 'shortcut icon', href: 'favicon.ico' }    
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  // loading: {
  //   color: '#49F9C4'
  // },

  loading: '~/components/loading.vue',

  /*
   ** Global CSS
   */
  css: [
    '~/assets/main.css'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/prismic.js',
    '~/plugins/lazyloading.js',
    {
      src: '~/plugins/three',
      ssr: false
    }
    
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    ['nuxt-sass-resources-loader',
      [
        '~/assets/sass/main.scss'
      ]
    ],
    '@nuxtjs/axios',
  ],

  /*
   ** Build configuration
   */
  build: {
    vendor: ['axios', 'vue-lazyload', 'three.js']
  }
}

// function changeLoaderOptions(loaders) {
//   if (loaders) {
//     for (const loader of loaders) {
//       let options
//       switch (loader.loader) {
//         case 'stylus-loader':
//           options = {
//             paths: [path.resolve('./assets/stylus')],
//             import: ['main']
//           }
//           break
//       }
//       if (options) {
//         Object.assign(loader.options, options)
//       }
//     }
//   }
// }
