import { Outlet, useLocation } from "react-router-dom";

import { cn } from "@/shared/lib/variants";

export default function Layout() {
  const location = useLocation();
  const isResultPage = location.pathname === "/result";
  return (
    <div className="h-screen flex flex-col bg-bg text-[15px]">
      <header
        className={cn(
          "relative z-10 flex items-center justify-center min-h-13 text-text-secondary font-medium",
          isResultPage && "text-white"
        )}
      >
        지원자 박민규입니다.
      </header>
      <div className="flex-1 px-5">
        <Outlet />
      </div>
    </div>
  );
}
