import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    port: 3000,      // Change the port
    host: '0.0.0.0', // Allow access from network
    open: true,      // Auto-open in browser
  },
})
