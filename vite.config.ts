import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue';
// eslint-disable-next-line import/no-unresolved
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';
// import VueDevTools from 'vite-plugin-vue-devtools';
// https://vite.dev/config/
export default defineConfig({
  optimizeDeps: {
    noDiscovery: false,
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
