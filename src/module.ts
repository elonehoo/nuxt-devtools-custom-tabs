import {
  defineNuxtModule,
} from '@nuxt/kit'

export interface ModuleOptions {
  tabs:{
    name: string,
    icon: string,
    url:string
  }[]
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-devtools-custon-tabs',
    compatibility: {
      nuxt: '^3.0.0',
    },
  },
  defaults: {
    tabs: []
  },
  setup(_options, nuxt) {
    nuxt.hook('devtools:customTabs', (iframeTabs) => {
      _options.tabs.forEach(tab => {
        iframeTabs.push({
          name: tab.name,
          title: tab.name.charAt(0).toUpperCase() + tab.name.slice(1),
          icon: tab.icon,
          view: {
            type: 'iframe',
            src: tab.url,
          }
        })
      })
      
    })
  }
})
