import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    server:  {
        port: 3009
    },
    plugins: [
        vue({customElement: true}),
    ],
    build:   {
        lib: {
            entry: "src/main.js",
            name: "App02",
            formats : ["es", "iife"],
            fileName: 'vue-app'
        }
    }
})
