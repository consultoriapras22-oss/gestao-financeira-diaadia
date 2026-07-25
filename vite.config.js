import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// A landing é o app React em "/". A pasta public/ é copiada como está para dist/,
// então o sistema (public/sistema/index.html) fica disponível em "/sistema/".
export default defineConfig({
  plugins: [react()],
  build: { outDir: 'dist' }
});
