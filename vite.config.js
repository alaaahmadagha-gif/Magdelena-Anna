import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    // Honour an assigned PORT so the dev server does not fight for 5173.
    port: Number(process.env.PORT) || 5173,
  },
})
