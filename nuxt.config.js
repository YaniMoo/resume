export default {
  mode: 'universal',
  target: 'server',

  head: {
    title: 'Yani : Resume',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    // link: [
    //   { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' } 
    // ],
  },

  css: [
    '~/node_modules/bootstrap/dist/css/bootstrap.css',
    '~/node_modules/bootstrap-vue/dist/bootstrap-vue.css',
    '~/static/style/main.css'
  ],

  plugins: [
    { src: "~/plugins/icon.js" },
  ],

  components: true,

  modules: [
    'bootstrap-vue/nuxt',
  ],

  build: {

  },
  target: 'static',
  router: {
    base: '/resume',
    // middleware: ["path"],
    extendRoutes(routes, resolve) {
      routes.push({
        name: "th",
        path: "/th",
        component: resolve(__dirname, "pages/th.vue")
      }),
      routes.push({
        name: "en",
        path: "/en",
        component: resolve(__dirname, "pages/en.vue")
      }),
      routes.push({
        name: "index",
        path: "*",
        component: resolve(__dirname, "pages/en.vue")
      })
      ;
    }
  },
  i18n: {
    locales: ["en", "th"],
    defaultLocale: "th",
    strategy: "no_prefix",
    vueI18n: {
      fallbackLocale: "th",
      messages: {
        en: require("./assets/langs/en.json"),
        th: require("./assets/langs/th.json")
      }
    }
  },
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'font', 'style'].includes(type)
      },
      shouldPrefetch: (file, type) => {
        return ['style', 'font', 'style'].includes(type)
      }
    }
  }
}
