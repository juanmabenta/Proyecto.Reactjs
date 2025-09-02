// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 👇 cambia el nombre según tu repo exacto en GitHub
  base: '/proyecto-reactjs/',
})
