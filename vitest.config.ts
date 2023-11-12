import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    coverage: {
      exclude: ['src/main.tsx'],
      include: ['src'],
    },
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./setupTests.ts'],
  },
});
