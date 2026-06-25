import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const githubPagesBase =
  repositoryName && !repositoryName.endsWith('.github.io') ? `/${repositoryName}/` : '/';

export default defineConfig({
  base: process.env.VITE_BASE_PATH ?? githubPagesBase,
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.ts',
  },
});
