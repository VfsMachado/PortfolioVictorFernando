import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/PortfolioVictorFernando/', // precisa ser o NOME exato do repositório
  plugins: [react()],
});