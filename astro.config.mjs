// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://gceico.me',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    // Tiny site — inline all CSS into each page for fewer requests.
    inlineStylesheets: 'always',
  },
  image: {
    // sharp is the default service; kept explicit for clarity.
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
