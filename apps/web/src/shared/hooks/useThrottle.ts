import { useCallback, useRef } from "react";

/**
 * Throttle + signle process
 * - func: 비동기 함수(Promise 반환)
 * - wait: throttle duration(ms)
 *
 * 정해진 시간을 안에는 호출되지 않음
 *
 * 이미 실행중인 프로세스가 있다면 해당 프로세스를 반환
 */
export function useThrottle<Args extends unknown[], Result>(
  func: (...args: Args) => Promise<Result>,
  wait = 800
) {
  const lastCalledRef = useRef<number>(0);
  const processingRef = useRef<Promise<Result> | null>(null);

  return useCallback(
    (...args: Args): Promise<Result> | undefined => {
      if (processingRef.current) {
        return processingRef.current;
      }

      const now = Date.now();
      if (now - lastCalledRef.current < wait) {
        return;
      }

      lastCalledRef.current = now;

      const processing = func(...args).finally(() => {
        processingRef.current = null;
      });

      processingRef.current = processing;
      return processing;
    },
    [func, wait]
  );
}
