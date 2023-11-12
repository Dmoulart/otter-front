// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},
  modules: ["@nuxt/ui"],
  privateRuntimeConfig: {
    api: {
      baseURL: "http://localhost:8080",
    },
  },
});
