import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["axios"], // Marks Axios as external (if you’re using a CDN or similar external source)
    },
  },
});
