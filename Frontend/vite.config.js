import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allow access from outside
    port: process.env.PORT || 4000, // Use Render's port or fallback to 5173
  },
});
