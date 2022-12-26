import { defineConfig } from "vitest/config";

export default defineConfig((env) => ({
  test: {
    coverage: {
      reporter: ["json", "html"],
      exclude: ["**/*.spec.*"],
      reportsDirectory: "coverage-vitest"
    },
  },
}));
