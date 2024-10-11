// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://juliushussl.at/",
  integrations: [mdx(), sitemap(), icon()],
  redirects: {
    "/RoomSensor": "/iqwertz-projects/room-sensor",
  },
});
