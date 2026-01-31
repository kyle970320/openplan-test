import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: false,
      outDir: "dist",
      include: ["src"],
    }),
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "OpenplanTestUi",
      formats: ["es", "cjs"],
      fileName: (format) => (format === "es" ? "index.js" : "index.cjs"),
    },
    outDir: "dist",
    sourcemap: true,
    emptyOutDir: true,
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        assetFileNames: "style.css",
      },
    },
  },
});
