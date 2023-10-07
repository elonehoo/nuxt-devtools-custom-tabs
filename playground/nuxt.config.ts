import CustomTabs from '../src/module'

export default defineNuxtConfig({
  typescript: { strict: true, includeWorkspace: true },
  modules: [
    '@nuxt/devtools',
    [CustomTabs,{
      tabs:[
        {
          name:'vue',
          icon:'i-logos-vue',
          url:'https://cn.vuejs.org/guide/introduction.html'
        },
        {
          name:'vite',
          icon:'i-logos-vitejs',
          url:'https://vitejs.dev/'
        },
        {
          name:'nuxt',
          icon:'i-logos-nuxt-icon',
          url:'https://nuxt.com/'
        },
        {
          name:'antfu',
          icon:'i-mdi-cash-100',
          url:'https://antfu.me/'
        }
      ]
    }]
  ]
})
