// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  plugins: [react(), reactRefresh()],
  server: {
    host: true, // Same as '0.0.0.0', allows LAN access
    port: 8090,
    strictPort: true,
    allowedHosts: ['msi.local'],
    hmr: {
      protocol: 'ws',
      host: 'msi.local',
      clientPort: 8090,
    },
    watch: {
      usePolling: true       // Enable polling for file changes
    }
  }
});
