// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://onestopleveling.com',
  base: '/onestop-website',
  vite: {
    plugins: [tailwindcss()]
  }
});