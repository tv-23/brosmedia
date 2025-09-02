// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  compressHTML: true, // Enable HTML compression
  build: {
    format: 'directory', // Better caching
  },
  vite: {
    build: {
      minify: 'terser', // Ensure minification
    }
  }
});