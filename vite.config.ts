import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/dragonball",
  server: { port: 80 },
  preview: { port: 80 },
  build: {
    rollupOptions: {
      external: [
        // external libs
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react-bootstrap",
        // "data.json",
      ],
    },
  },
  plugins: [
    react(),
    legacy({
      polyfills: ["es.promise.finally", "es/map", "es/set"],
      modernPolyfills: ["es.promise.finally"],
      renderLegacyChunks: false,
      targets: ["defaults", "not IE 11"],
      //polyfills: ["es/object/has-own"],
      //modernPolyfills: ["es/object/has-own"],
    }),
  ],
});
