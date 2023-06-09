import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@assets',
        replacement: path.resolve(path.join(__dirname, '/src/assets')),
      },
      {
        find: '@components',
        replacement: path.resolve(path.join(__dirname, '/src/components')),
      },

      {
        find: '@pages',
        replacement: path.resolve(path.join(__dirname, '/src/pages')),
      },

      {
        find: '@sass',
        replacement: path.resolve(path.join(__dirname, '/src/sass')),
      },
      {
        find: '@constants',
        replacement: path.resolve(path.join(__dirname, '/src/constants')),
      },
      {
        find: '@hooks',
        replacement: path.resolve(path.join(__dirname, '/src/hooks')),
      },
      {
        find: '@redux',
        replacement: path.resolve(path.join(__dirname, '/src/redux')),
      },
      {
        find: '@utils',
        replacement: path.resolve(path.join(__dirname, '/src/utils')),
      },
      {
        find: '@service',
        replacement: path.resolve(path.join(__dirname, '/src/service')),
      },
      {
        find: '@routes',
        replacement: path.resolve(path.join(__dirname, '/src/routes')),
      },
      {
        find: '@types',
        replacement: path.resolve(path.join(__dirname, '/src/types')),
      },
    ],
  },
});
