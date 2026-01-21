import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Stellar-Academy/',
  plugins: [react()],
  build: {
    outDir: 'docs',
  },
});
