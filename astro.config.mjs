// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// Using static output for simpler Vercel deployment (no SSR needed)
// Formspree handles form submission server-side
export default defineConfig({
  site: 'https://sterling-legal-two.vercel.app',
  output: 'static',
  integrations: [sitemap()]
});
