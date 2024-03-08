import Icons from "unplugin-icons/vite";
import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Icons()],
  base: "/eg-commission-info/",
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
      {
        find: "@assets",
        replacement: fileURLToPath(new URL("./src/assets", import.meta.url)),
      },
      {
        find: "@data",
        replacement: fileURLToPath(
          new URL("./src/statics/data", import.meta.url),
        ),
      },
    ],
  },
});
