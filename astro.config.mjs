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
    build: {
      minify: 'esbuild', // ✅ Asegura minificación eficiente (esbuild es rápido y moderno)
    },
    resolve: {
      alias: {
        '@/components': new URL('./src/components', import.meta.url).pathname,
        '@/assets': new URL('./public', import.meta.url).pathname,
        '@/styles': new URL('./src/styles', import.meta.url).pathname,
      },
    },
  },
  integrations: [react()],
  trailingSlash: 'never', // ✅ Rutas limpias: /about en lugar de /about/
});
