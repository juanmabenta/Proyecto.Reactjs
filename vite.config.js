import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Agregá la propiedad "base"
export default defineConfig({
  plugins: [react()],
  base: '/Proyecto.Reactjs/',
})
