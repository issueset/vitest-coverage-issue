/// <reference types="vitest" />

import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig((env) => ({
  test: {
    coverage: {
      reporter: ["json", "html"],
      exclude: ["**/*.spec.*"],
    },
  },
}));
