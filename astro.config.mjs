import { defineConfig } from 'astro/config';
import auth from "auth-astro";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://debconf24-bof.newsniper.org/",
  integrations: [tailwind(), auth()],
  output: "server",
  server: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    }
  },
  adapter: vercel()
});