import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/dragonball",
  server: { port: 80 },
  preview: { port: 80 },
  build: {
    minify: false,
    target: "es5",
    rollupOptions: {
      external: [
        // external libs
        // "react",
        // "react-dom",
        // "react/jsx-runtime",
        // "react-bootstrap",
      ],
    },
  },
  plugins: [
    react(),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
  ],
});
