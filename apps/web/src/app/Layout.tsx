import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="h-screen flex flex-col">
      <header className="flex items-center justify-center h-13 bg-bg text-[15px] text-text-secondary font-medium">
        지원자 박민규입니다.
      </header>
      <Outlet />
    </div>
  );
}
