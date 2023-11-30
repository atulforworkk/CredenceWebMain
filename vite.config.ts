import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
<<<<<<< HEAD
import path from "path"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
=======

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
>>>>>>> 757bfa279db42a0db0b91b5fc7ddfa5e1ef96276
})
