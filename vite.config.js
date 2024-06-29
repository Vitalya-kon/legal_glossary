import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@formkit/auto-animate': '@formkit/auto-animate/vue', // Псевдоним для модуля @formkit/auto-animate/vue
    }
  },

  base: process.env.NODE_ENV === 'production'
    ? '/legal_glossary/dist/'
    : '/'
})
