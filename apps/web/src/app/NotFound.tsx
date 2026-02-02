import { Button } from "@openplan-test/ui";
import { useNavigate } from "react-router-dom";

import { Ban } from "@/shared/ui/Ban";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4 px-5 w-full h-screen items-center justify-center">
      <Ban size={100} />
      <h1 className="mt-4 text-2xl text-text-primary font-semibold">페이지를 찾을 수 없어요</h1>
      <p className="text-sm text-text-secondary">
        요청하신 주소가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <Button variant="primary" className="mt-2" onClick={() => navigate("/")}>
        홈으로 돌아가기
      </Button>
    </div>
  );
}
