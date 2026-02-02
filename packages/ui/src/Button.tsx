import styles from "./Button.module.css";

import type { ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary";

export type ButtonSize = "sm" | "md" | "lg" | "full";

/**
 * @interface ButtonProps
 * @param variant - 버튼 스타일
 * @param size - 버튼 크기
 * @param disabled - 버튼 비활성화 여부
 * @param loading - 버튼 로딩 상태
 * @param onClick - 버튼 클릭 핸들러
 * @param children - 버튼 내용
 * @param className - 버튼 클래스 이름
 */
export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: styles.sm,
  md: styles.md,
  lg: styles.lg,
  full: styles.full,
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: styles.primary,
  secondary: styles.secondary,
};

/**
 * primary/secondary 변형, sm/md/lg 크기를 지원하는 버튼 컴포넌트.
 * hover·pressed 시 opacity 80%, disabled·loading 상태 지원.
 * className으로 소비 앱의 Tailwind 유틸(w-full, mt-4 등) 병합 가능.
 *
 * @param props - ButtonProps
 * @returns 버튼 엘리먼트
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="md">클릭</Button>
 * <Button variant="secondary" className="mt-4 w-full">저장</Button>
 * ```
 */
export function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  onClick,
  children,
  className,
}: ButtonProps) {
  const isDisabled = disabled || loading;
  const mergedClassName = [styles.root, sizeClasses[size], variantClasses[variant], className]
    .filter(Boolean)
    .join(" ");

  return (
    <button type="button" disabled={isDisabled} onClick={onClick} className={mergedClassName}>
      {loading ? (
        <>
          <span className={styles.spinner} aria-hidden />
          <span>{children}</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}
