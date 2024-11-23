import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: '.',  // Spécifie la racine du projet
  plugins: [react()],
});
