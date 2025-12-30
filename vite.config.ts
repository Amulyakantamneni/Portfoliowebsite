import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist", // keep Vite default to avoid Vercel mismatch
    target: "esnext",
  },
  server: {
    port: 3000,
    open: true,
  },
});
