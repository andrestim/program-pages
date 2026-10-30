import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Relative base: the site works from any sub-path (GitHub Pages serves it under /<repo>/)
  base: './',
  plugins: [react()],
  server: { port: 5178, strictPort: true },
});
