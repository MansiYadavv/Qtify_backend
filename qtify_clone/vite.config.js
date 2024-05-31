import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { config } from 'dotenv';
import svgr from 'vite-plugin-svgr';


// Load environment variables from .env file
config();

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    port: process.env.PORT || 3000,
  },
});
