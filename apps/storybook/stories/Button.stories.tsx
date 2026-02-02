import { Button } from "@openplan-test/ui";
import type { Meta, StoryObj } from "@storybook/react";
import type { ReactNode } from "react";
import { action } from "storybook/actions";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "UI/Button",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `primary/secondary 변형,\n
sm/md/lg 크기를 지원하는 버튼 컴포넌트.\n
hover·pressed 시 opacity 80%, disabled·loading 상태 지원.\n
className으로 소비 앱의 Tailwind 유틸(w-full, mt-4 등) 병합 가능.`,
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary"],
      description: "버튼 스타일 변형. primary는 주요 액션, secondary는 보조 액션에 사용합니다.",
      table: {
        type: { summary: '"primary" | "secondary"' },
        defaultValue: { summary: '"primary"' },
      },
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "full"],
      description: "버튼 크기. sm(작음), md(중간, 기본값), lg(큼), full(전체 너비)를 지원합니다.",
      table: {
        type: { summary: '"sm" | "md" | "lg" | "full"' },
        defaultValue: { summary: '"md"' },
      },
    },
    disabled: {
      control: "boolean",
      description:
        "버튼 비활성화 여부. true일 경우 클릭할 수 없고 시각적으로 비활성화 상태를 표시합니다.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    loading: {
      control: "boolean",
      description: "버튼 로딩 상태. true일 경우 스피너가 표시되고 자동으로 disabled 상태가 됩니다.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    onClick: {
      action: "clicked",
      description: "버튼 클릭 시 실행되는 핸들러 함수.",
      table: {
        type: { summary: "() => void" },
      },
    },
    children: {
      description: "버튼 내부에 표시될 내용.",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    className: {
      description:
        "추가 CSS 클래스명. Tailwind 유틸리티 클래스(w-full, mt-4 등)를 병합할 수 있습니다.",
      table: {
        type: { summary: "string" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

const Container = ({ children }: { children: ReactNode }) => (
  <div className="w-full h-full flex gap-3 items-center justify-center flex-wrap">{children}</div>
);

export const Default: Story = {
  args: {
    children: "Button",
    onClick: action("button-clicked"),
  },
  parameters: {
    docs: {
      description: {
        story: "기본 버튼 상태입니다. primary variant와 md size가 기본값으로 적용됩니다.",
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "disabled 속성이 true일 때의 버튼 상태입니다. 클릭할 수 없고 시각적으로 비활성화된 상태를 표시합니다.",
      },
    },
  },
};

export const Loading: Story = {
  args: {
    children: "Loading",
    loading: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "loading 속성이 true일 때의 버튼 상태입니다. 스피너가 표시되고 자동으로 disabled 상태가 됩니다. 비동기 작업 중 사용자에게 진행 상태를 표시할 때 유용합니다.",
      },
    },
  },
};

export const Variants: Story = {
  render: () => (
    <Container>
      <Button variant="primary" onClick={action("primary-clicked")}>
        Primary
      </Button>
      <Button variant="secondary" onClick={action("secondary-clicked")}>
        Secondary
      </Button>
    </Container>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "버튼의 두 가지 스타일 변형을 비교합니다. primary는 주요 액션(저장, 확인 등)에, secondary는 보조 액션(취소, 뒤로가기 등)에 사용합니다.",
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <Container>
      <Button size="sm" onClick={action("small-clicked")}>
        Small
      </Button>
      <Button size="md" onClick={action("medium-clicked")}>
        Medium
      </Button>
      <Button size="lg" onClick={action("large-clicked")}>
        Large
      </Button>
      <Button size="full" onClick={action("full-clicked")}>
        Full Width
      </Button>
    </Container>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "버튼의 네 가지 크기 옵션을 비교합니다. sm(작음), md(중간, 기본값), lg(큼), full(전체 너비)를 지원합니다.",
      },
    },
  },
};
