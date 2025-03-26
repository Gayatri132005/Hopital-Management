import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Allows access from any IP
    port: 5173, // Change if needed
    strictPort: true, // Ensures the port is not changed automatically
  },
});
