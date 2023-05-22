import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['/assets/index-f52e0bb2.js'],
    },
  },
  plugins: [react()],
})
