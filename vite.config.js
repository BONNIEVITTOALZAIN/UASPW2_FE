import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://8.218.83.35', // URL API Anda
        changeOrigin: true,          // Mengatur header Origin
        rewrite: (path) => path.replace(/^\/api/, ''), // Opsional, jika path perlu diubah
      },
    },
  },
})
