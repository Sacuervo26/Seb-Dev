// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://seb-dev-nu.vercel.app',
  vite: {
    plugins: [tailwindcss()]
  },

  devToolbar: {
    enabled: false, // Desactiva la toolbar completamente
  },

  integrations: [sitemap()],
});