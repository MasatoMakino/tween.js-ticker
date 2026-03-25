import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    name: "vite-test",
    environment: "jsdom",
    coverage: {
      provider: "istanbul",
      reporter: ["text", "lcov"],
      include: ["src/**/*.{ts,tsx}"],
    },
  },
});
