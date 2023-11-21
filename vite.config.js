import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  target: 'server',
  server: {
    host: '0.0.0.0',
  },
  build: {
    outDir: "dist", // مکان فایل‌های ساخته شده
  },
});
