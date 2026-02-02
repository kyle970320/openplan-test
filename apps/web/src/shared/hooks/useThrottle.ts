import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Throttle + signle process
 * - func: 비동기 함수(Promise 반환)
 * - wait: throttle duration(ms)
 *
 * 정해진 시간을 안에는 호출되지 않음
 *
 * 이미 실행중인 프로세스가 있다면 해당 프로세스를 반환
 *
 * isBlocked: 정해진 시각 안쪽에서는 항상 loading 상태
 *
 * isProcessing: 현재 프로세스가 실행중이면 항상 loading 상태
 */
export function useThrottle<Args extends unknown[], Result>(
  func: (...args: Args) => Promise<Result>,
  wait = 800
) {
  const lastCalledRef = useRef<number>(0);
  const processingRef = useRef<Promise<Result> | null>(null);

  const unblockTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isBlocked, setIsBlocked] = useState<boolean>(false);
  const isThrottledLoading = isProcessing || isBlocked;

  useEffect(() => {
    return () => {
      if (unblockTimerRef.current) clearTimeout(unblockTimerRef.current);
    };
  }, []);

  const throttledFunc = useCallback<(...args: Args) => Promise<Result> | undefined>(
    (...args: Args): Promise<Result> | undefined => {
      if (processingRef.current) {
        return processingRef.current;
      }

      const now = Date.now();
      const remain = wait - (now - lastCalledRef.current);
      if (remain > 0) {
        setIsBlocked(true);

        if (unblockTimerRef.current) {
          clearTimeout(unblockTimerRef.current);
        }

        unblockTimerRef.current = setTimeout(() => {
          setIsBlocked(false);
          unblockTimerRef.current = null;
        }, remain);

        return;
      }

      lastCalledRef.current = now;
      setIsBlocked(false);
      setIsProcessing(true);

      const processing = func(...args).finally(() => {
        processingRef.current = null;
        setIsProcessing(false);
      });

      processingRef.current = processing;
      return processing;
    },
    [func, wait]
  );

  return { throttledFunc, isThrottledLoading };
}
