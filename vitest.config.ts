import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    coverage: {
      exclude: ['src/main.tsx', 'src/**/types.ts'],
      include: ['src'],
    },
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./setupTests.ts'],
  },
});
