import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Mi-Portafolio-Web/', // Reemplaza <nombre-del-repositorio> con el nombre de tu repositorio en GitHub
});
