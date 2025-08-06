import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Important for routing
  build: {
    rollupOptions: {
      external: ['react-router-dom'] // Add this line
    }
  }
})