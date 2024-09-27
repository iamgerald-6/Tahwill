import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3007,
  },
  optimizeDeps: {
    include: ["jsx-dep"],
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@src": path.resolve(__dirname, "./src"),
      "@": path.resolve(__dirname, "./"),
    },
  },
});
