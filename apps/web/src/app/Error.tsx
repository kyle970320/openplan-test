import { Button } from "@openplan-test/ui";

import { Charge } from "@/shared/ui/Charge";

interface Props {
  error: Error;
}

export default function Error({ error }: Props) {
  const message = error?.message || "알 수 없는 오류가 발생했습니다.";

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col gap-4 px-5 w-full h-screen items-center justify-center">
      <Charge size={100} />
      <h1 className="text-2xl text-text-primary font-semibold">문제가 발생했어요</h1>
      <p className="text-sm text-text-secondary">{message}</p>
      <p>잠시 후 다시 시도해주세요.</p>
      <Button variant="primary" onClick={handleReload}>
        페이지 새로 고침
      </Button>
    </div>
  );
}
