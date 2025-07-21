import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for the Atlas ERA web app.
// The React plugin is enabled to support JSX and hot reloading.
export default defineConfig({
  plugins: [react()],
  base: './',
});