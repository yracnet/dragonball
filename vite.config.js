import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/dragonball",
  //server: { port: 80 },
  build: {
    rollupOptions: {
      external: [
        //"react",
        //"react-dom",
        "data.json",
      ],
    },
  },
  plugins: [react()],
});
