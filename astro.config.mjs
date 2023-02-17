import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import solidJs from "@astrojs/solid-js";

export default defineConfig({
  output: "server",
  adapter: node({ mode: "standalone" }),
  integrations: [solidJs()],
});
