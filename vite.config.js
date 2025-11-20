import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5175,
    allowedHosts: ['.ngrok-free.dev'], // erlaubt alle ngrok-Domains
    host: true, // <- GANZ WICHTIG: lässt externe Verbindungen zu!
  }
})