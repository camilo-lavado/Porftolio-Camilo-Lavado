// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import node from '@astrojs/node';

export default defineConfig({
  output: 'server', // ✅ Necesario para Render (Node deployment)
  adapter: node({ mode: 'standalone' }),
  server: {
    port: Number(process.env.PORT) || 4321,
    host: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});
