import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // This repository is published as a project site, not at the account root.
  base: '/zayarlinmaung.github.io/',
  plugins: [react()],
})
