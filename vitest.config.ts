import { defineConfig } from "vite";

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
