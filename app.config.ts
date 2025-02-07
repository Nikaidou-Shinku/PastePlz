import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: {
    prerender: {
      routes: ["/", "/404"],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
