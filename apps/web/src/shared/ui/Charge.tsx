import { motion } from "motion/react";
import { forwardRef } from "react";
import type { HTMLAttributes } from "react";

import { cn } from "@/shared/lib/variants";

interface ChargeProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const Charge = forwardRef<HTMLDivElement, ChargeProps>(
  ({ className, size = 28, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(className)} {...props}>
        <svg
          fill="none"
          height={size}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width={size}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect height="20" rx="2" ry="2" width="14" x="5" y="2" />
          <motion.path
            d="M12.667 8 10 12h4l-2.667 4"
            initial="normal"
            animate="animate"
            variants={{
              normal: { opacity: 1 },
              animate: {
                opacity: [1, 0.4, 1],
                transition: {
                  duration: 1,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
              },
            }}
          />
        </svg>
      </div>
    );
  }
);

Charge.displayName = "Charge";
export { Charge };
