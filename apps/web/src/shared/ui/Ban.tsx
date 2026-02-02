import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";
import { forwardRef, useEffect, useRef } from "react";
import type { HTMLAttributes } from "react";

import { cn } from "@/shared/lib/variants";

interface BanIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;

  /** 한 사이클(그리기+유지+리셋) 이후 다음 사이클까지 대기(ms) */
  loopDelayMs?: number;
}

const CIRCLE_VARIANTS: Variants = {
  normal: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 1.95, opacity: { duration: 0.1 } },
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    transition: { duration: 1.95, opacity: { duration: 0.1 } },
  },
};

const LINE_VARIANTS: Variants = {
  normal: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 1.95, opacity: { duration: 0.1 } },
  },
  slash: {
    opacity: [0, 1],
    pathLength: [0, 1],
    transition: { duration: 1.95, opacity: { duration: 0.1 } },
  },
};

const Ban = forwardRef<HTMLDivElement, BanIconProps>(
  ({ className, size = 28, loopDelayMs = 650, ...props }, ref) => {
    // ✅ 컨트롤을 2개로 분리 (circle / slash)
    const circleControls = useAnimation();
    const lineControls = useAnimation();

    const intervalRef = useRef<number | null>(null);
    const timeoutsRef = useRef<number[]>([]);

    useEffect(() => {
      const clearTimers = () => {
        if (intervalRef.current != null) {
          window.clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        timeoutsRef.current.forEach((t) => window.clearTimeout(t));
        timeoutsRef.current = [];
      };

      const runCycle = () => {
        circleControls.set("normal");
        lineControls.set("normal");
        circleControls.start("animate");
        lineControls.start("slash");

        // 3) 다 끝나면 normal로 복귀
        timeoutsRef.current.push(
          window.setTimeout(() => {
            circleControls.start("normal");
            lineControls.start("normal");
          }, 1950)
        );
      };

      // 첫 사이클 즉시 실행
      runCycle();

      // ✅ 이후 계속 반복
      intervalRef.current = window.setInterval(() => {
        runCycle();
      }, 3000 + loopDelayMs);

      return () => {
        clearTimers();
        circleControls.stop();
        lineControls.stop();
      };
    }, [circleControls, lineControls, loopDelayMs]);

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
          <motion.circle
            animate={circleControls}
            cx="12"
            cy="12"
            initial="normal"
            r="10"
            variants={CIRCLE_VARIANTS}
          />
          <motion.path
            animate={lineControls}
            d="m4.9 4.9 14.2 14.2"
            initial="normal"
            variants={LINE_VARIANTS}
          />
        </svg>
      </div>
    );
  }
);

Ban.displayName = "Ban";
export { Ban };
