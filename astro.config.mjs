// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fabiolapsi.com.br', // Ou o domínio do seu teste
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    '/home-2': '/',
    '/home-2/': '/'
  }
});
