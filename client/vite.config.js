import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/My_Profile/',   // <--- repo name
  plugins: [react()],
  server: { port: 5173 },
  preview: { port: 5173 }
})

  

