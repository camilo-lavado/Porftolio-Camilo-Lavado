// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel'; // ✅ no uses /serverless

export default defineConfig({
  output: 'server', // o 'static' si tu portfolio no necesita SSR
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
    build: {
      minify: 'esbuild',
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
  trailingSlash: 'never',
});
