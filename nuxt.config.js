export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "c",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // Doc: https://github.com/nuxt-community/color-mode-module
    "@nuxtjs/color-mode",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    "nuxt-i18n",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
  ],
  i18n: {
    locales: [
      {
        code: "en",
        file: "en-IN.js",
        name: "English",
      },
      {
        code: "es",
        file: "es-ES.js",
        name: "Español",
      },
      {
        code: "fr",
        file: "fr-FR.js",
        name: "Français",
      },
    ],
    lazy: true,
    langDir: "lang/",
    defaultLocale: "en",
  },
  tailwindcss: {
    // add '~tailwind.config` alias
    exposeConfig: true,
  },
  purgeCSS: {
    whitelist: ["dark-mode"],
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
};
