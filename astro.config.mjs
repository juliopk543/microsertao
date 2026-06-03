// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages (project page): https://juliopk543.github.io/microsertao/
  site: 'https://juliopk543.github.io',
  base: '/microsertao',
  vite: {
    plugins: [tailwindcss()]
  }
});
