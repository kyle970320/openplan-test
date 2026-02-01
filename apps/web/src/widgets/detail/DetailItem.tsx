import type { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  label: string;
}

export function DetailItem({ label, children }: Props) {
  return (
    <div className="flex-1 min-w-0">
      <p>{label}</p>
      <div className="text-text-primary opacity-50 wrap-break-word">{children}</div>
    </div>
  );
}
