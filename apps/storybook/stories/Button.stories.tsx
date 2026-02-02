import { Button } from "@openplan-test/ui";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "UI/Button",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

/** 기본 상태 */
export const Default: Story = {
  args: {
    children: "Button",
  },
};

/** 비활성화 상태 */
export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};

/** 로딩 상태 (스피너 표시) */
export const Loading: Story = {
  args: {
    children: "Loading",
    loading: true,
  },
};

/** Primary / Secondary 변형 */
export const Variants: Story = {
  render: () => (
    <div className="w-full h-full flex gap-3 items-center justify-center">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
    </div>
  ),
};

/** sm / md / lg 크기 */
export const Sizes: Story = {
  render: () => (
    <div className="w-full h-full flex gap-3 items-center justify-center flex-wrap">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};
