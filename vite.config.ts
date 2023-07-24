import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import VitePluginHtmlEnv from 'vite-plugin-html-env';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePluginHtmlEnv(), VitePluginHtmlEnv({ compiler: true })],
  server: {
    proxy: {
      '/api': {
        target: 'https://goormtone6th.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: false,
        ws: true,
      },
    },
  },
});
