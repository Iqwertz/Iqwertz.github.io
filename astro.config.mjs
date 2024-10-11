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
    "/Battlebots": "https://projects.juliushussl.at/Battlebots/",
    "/Battlebots-stable": "https://projects.juliushussl.at/Battlebots-stable/",
    "/BleMatrix": "https://projects.juliushussl.at/BleMatrix/",
    "/buttonTopCreator": "https://projects.juliushussl.at/buttonTopCreator/",
    "/Connect-4": "https://projects.juliushussl.at/Connect-4/",
    "/Curves": "https://projects.juliushussl.at/Curves/",
    "/CustomTimer": "https://projects.juliushussl.at/CustomTimer/",
    "/Drawmirror": "https://projects.juliushussl.at/Drawmirror/",
    "/DVD_online": "https://projects.juliushussl.at/DVD_online/",
    "/FerienTimer": "https://projects.juliushussl.at/FerienTimer/",
    "/Gif2Matrix": "https://projects.juliushussl.at/Gif2Matrix/",
    "/giphychallenge": "https://projects.juliushussl.at/giphychallenge/",
    "/IAEA": "https://projects.juliushussl.at/IAEA/",
    "/launchpadConfigurator":
      "https://projects.juliushussl.at/launchpadConfigurator/",
    "/Lines": "https://projects.juliushussl.at/Lines/",
    "/lithophanekeychain":
      "https://projects.juliushussl.at/lithophanekeychain/",
    "/online_verbum_quaero":
      "https://projects.juliushussl.at/online_verbum_quaero/",
    "/OpenPullController":
      "https://projects.juliushussl.at/OpenPullController/",
    "/poller": "https://projects.juliushussl.at/poller/",
    "/Raummessung": "https://projects.juliushussl.at/Raummessung/",
    "/RoomSensor": "https://projects.juliushussl.at/RoomSensor/",
    "/Schulball": "https://projects.juliushussl.at/Schulball/",
    "/selfieDrawer": "https://projects.juliushussl.at/selfieDrawer/",
    "/terminal": "https://projects.juliushussl.at/terminal/",
    "/Transfertube": "https://projects.juliushussl.at/Transfertube/",
    "/Visualizer": "https://projects.juliushussl.at/Visualizer/",
  },
});
