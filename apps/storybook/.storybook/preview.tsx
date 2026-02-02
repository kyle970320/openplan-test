import React from "react";

import type { Preview } from "@storybook/react";
import "@openplan-test/ui/style.css";
import "../src/index.css";

const preview: Preview = {
  decorators: [
    (Story) => (
      <div
        className="w-full min-h-screen flex justify-center items-center"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
