import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import { manualChunksPlugin } from 'vite-plugin-webpackchunkname';

/**
 * @type {import('vite').defineConfig}
 */
export default defineConfig({
  resolve: {
    alias: {
      src: fileURLToPath(new URL('./src', import.meta.url)),
      '@me/canvas-lib': `${path.resolve(__dirname, '../../packages/canvas-lib/src')}`,
      '@me/ui-lib': `${path.resolve(__dirname, '../../packages/ui-lib/src')}`,
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
