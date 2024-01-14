import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import alpinejs from "@astrojs/alpinejs";

export default defineConfig({
  build: {
    assetsPrefix: './',
    assets: "_assets",
  },
  server: { port: 3000, host: true, open: "/"},
  trailingSlash: 'never',
  integrations: [tailwind(), alpinejs()]
});


