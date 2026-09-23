import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_URL || 'https://example.com',
  server: {
    host: true,
    port: 4321,
  },
});
