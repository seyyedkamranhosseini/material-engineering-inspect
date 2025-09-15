import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
  // Ensure public assets are served correctly
  publicDir: "public",
  // Configure asset handling
  assetsInclude: [
    "**/*.png",
    "**/*.jpg",
    "**/*.jpeg",
    "**/*.gif",
    "**/*.svg",
    "**/*.ico",
  ],
  // Build configuration
  build: {
    outDir: "dist",
    assetsDir: "assets",
    // Ensure all assets are copied
    copyPublicDir: true,
  },
});
