// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/PortfolioVictorFernando/', // <- nome do repositório entre barras
  plugins: [react()],
})
