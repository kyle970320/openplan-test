import path from "node:path";
import { fileURLToPath } from "node:url";

import tailwindcss from "@tailwindcss/vite";
import { loadConfigFromFile, mergeConfig, type UserConfig } from "vite";

import type { StorybookConfig } from "@storybook/react-vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [],
  framework: { name: "@storybook/react-vite", options: {} },

  async viteFinal(baseConfig) {
    const loaded = await loadConfigFromFile(
      { command: "serve", mode: "development" },
      path.resolve(__dirname, "../vite.config.ts")
    );

    const userViteConfig: UserConfig = loaded?.config ?? {};

    return mergeConfig(
      baseConfig,
      mergeConfig(userViteConfig, {
        plugins: [tailwindcss()],
      })
    );
  },
};

export default config;
