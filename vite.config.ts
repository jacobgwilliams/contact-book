/// <reference types="vitest/config" />
import { defineConfig } from "vitest/config"
import RubyPlugin from "vite-plugin-ruby"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [
    RubyPlugin(),
    react(),
  ],
  test: {
    environment: "node",
    include: ["**/*.test.{js,jsx}"],
  },
})
