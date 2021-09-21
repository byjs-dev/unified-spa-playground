import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  build:   {
    lib: {
      entry: "src/main.js",
      name: "App01",
      formats : ["es", "iife"],
      fileName: 'react-app'
    }
  }
})
