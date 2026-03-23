import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind"; 
// https://astro.build/config
export default defineConfig({
  site: 'https://weilinlai719.github.io',
  base: '/earth-science-explore',
  integrations: [tailwind()],
  output: 'static',
  build: {
    format: 'directory'
  }
});