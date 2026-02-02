import type { Preview } from "@storybook/react";
import React from "react";

import "@openplan-test/ui/style.css";
import "../src/index.css";

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className="w-full min-h-40 flex justify-center items-center">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
