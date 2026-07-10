// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// Using static output for simpler Vercel deployment (no SSR needed)
// Formspree handles form submission server-side
export default defineConfig({
  output: 'static',
});
