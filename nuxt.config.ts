// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},
  modules: ["@nuxt/ui", "@pinia/nuxt"],
  css: ["~/style/global.scss"],
  runtimeConfig: {
    public: {
      api: {
        baseURL: "http://localhost:8080",
      },
    },
  },
  experimental: {
    renderJsonPayloads: false,
  },
});
