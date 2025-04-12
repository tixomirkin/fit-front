import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import TanStackRouterVite from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({ target: 'react', autoCodeSplitting: true }),
    react(),
    tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    allowedHosts: ["localhost", "382008c3-15ef-4539-9e1b-1e286c2133ff-00-20vo57aqaulnu.worf.replit.dev"],
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        // changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }

  }
})
