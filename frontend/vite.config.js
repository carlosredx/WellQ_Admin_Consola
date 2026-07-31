import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
 
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1', // Evita timeouts de resolución DNS en Windows
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000', // Forzamos IPv4
        changeOrigin: true,
      },
    },
  },
})