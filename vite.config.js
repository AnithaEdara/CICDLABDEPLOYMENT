import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/hospital-management/', // <--- Add your base path here
  plugins: [react()],
})
