import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Organization GitHub Pages (ssc-bench.github.io)
  build: {
    outDir: '../dist', // Build to parent directory's dist folder
  },
})
