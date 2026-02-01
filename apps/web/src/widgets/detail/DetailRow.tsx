import type { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  direction?: "row" | "col";
}

export function DetailRow({ children, direction = "row" }: Props) {
  return (
    <div
      className={[
        "w-full p-5 rounded-2xl bg-white",
        direction === "row" ? "flex" : "flex flex-col gap-4",
      ].join(" ")}
    >
      {children}
    </div>
  );
}
