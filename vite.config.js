import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000, // sets the port explicitly to 3000
    hmr: {
      overlay: false, // disables the HMR overlay
    },
  },
});
