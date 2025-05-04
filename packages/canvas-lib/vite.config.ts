import vue from '@vitejs/plugin-vue';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default defineConfig({
  server: {
    fs: {
      allow: ['..'],
    },
  },
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(dirname, 'src/index.ts'),
      name: '@canvas-lib',
    },
    sourcemap: true,
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(dirname, '/'),
    },
  },
});
