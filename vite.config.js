import { fileURLToPath, URL } from "url";
import { VitePWA } from 'vite-plugin-pwa';

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      VitePWA({
        includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
        manifest: {
          name: 'Name of your app',
          short_name: 'Short name of your app',
          description: 'Description of your app',
          theme_color: '#ffffff',
          icons: [
            {
              src: 'icons/android-chrome-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: 'icons/android-chrome-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
            {
              src: 'icons/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable',
            }
          ]
        }
      })],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
