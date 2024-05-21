import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import { manualChunksPlugin } from 'vite-plugin-webpackchunkname';

/**
 * @type {import('vite').defineConfig}
 */
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
  },
  plugins: [vue(), manualChunksPlugin()],
  server: {
    fs: {
      strict: true,
    },
    port: 8005,
  },
});
