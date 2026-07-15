import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fabiolapsi.com.br/',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
   // 👇 ADICIONE ESTE BLOCO AQUI 👇
  redirects: {
    '/home-2': '/',
    '/home-2/': '/' // Garante que funcione com ou sem a barra no final
  }
});
