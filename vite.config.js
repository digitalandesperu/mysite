import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    // Optimizaciones agresivas para Fast 4G
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar vendor libraries más granular
          vendor: ["react", "react-dom"],
          framer: ["framer-motion"],
          utils: ["axios"],
        },
        // Chunks más pequeños
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
    // Minificación más agresiva
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log", "console.info"],
        passes: 2, // Doble pasada de optimización
      },
      mangle: {
        safari10: true,
      },
    },
    // Límites más estrictos
    chunkSizeWarningLimit: 500,
    sourcemap: false,
    // Compresión CSS
    cssCodeSplit: true,
    // Target más específico para mejor performance
    target: ["es2015", "chrome79", "safari13"],
  },
  // Optimizaciones de desarrollo
  server: {
    port: 3000,
  },
});
