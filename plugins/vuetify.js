// plugins/vuetify.js
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { aliases, fa } from 'vuetify/iconsets/fa'
import { mdi } from "vuetify/lib/iconsets/mdi";
// make sure to also import the coresponding css
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      dark: true,
      themes: {
        dark: true,
        colors: {
          primary: '#f1f1f1',
          secondary: '#b0bec5',
          accent: '#8c9eff',
          error: '#b71c1c',
        },
        variables: {
          
        }
      },
      icons: {
        defaultSet: 'fa',
        aliases,
        sets: {
          mdi,
          fa
        }
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
