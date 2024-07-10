import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro';
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  // used to generate images
  site: "https://bye-wanxiety-ncw5p0mas-giusy-castigliones-projects.vercel.app",
  trailingSlash: 'ignore',
  integrations: [sitemap(), UnoCSS({
    injectReset: true
  })],
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js']
    }
  },
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  })
});