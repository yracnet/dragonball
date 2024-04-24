import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/dragonball",
  server: { port: 80 },
  preview: { port: 80 },
  build: {
    rollupOptions: {
      external: [
        //
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react-bootstrap",
        "data.json",
      ],
    },
  },
  plugins: [react()],
})
