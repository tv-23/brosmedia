// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config

export default defineConfig({
    compressHTML: true, // Enable HTML compression
    build: {
        format: 'directory', // Better caching
    },
    vite: {
        build: {
            minify: 'esbuild', // Ensure minification
        }
    },
    site: 'https://brosmedia.ma/',
    integrations: [sitemap()]
});