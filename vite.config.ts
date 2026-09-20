import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  base: command === "build" ? "/montanhaoredor-gestao-alojamentos/" : "/",
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 4174,
    strictPort: true,
    allowedHosts: true,
  },
}));
