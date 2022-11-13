// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ['vuetify/lib/styles/main.sass', '@/node_modules/material-design-icons-iconfont/dist/material-design-icons.css'],
    build: {
        transpile: ['vuetify'],
    },
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
        ssr: {
            noExternal: ['vuetify'], // add the vuetify vite plugin
        },
    },
    runtimeConfig: {
        // The private keys which are only available server-side
        apiSecret: '123',
        // Keys within public are also exposed client-side
        public: {
            apiBase: '/api'
        }
    },
    
})