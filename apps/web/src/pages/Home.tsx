import { Button } from "@openplan-test/ui";
import "@openplan-test/ui/style.css";
/** / - 사진 조회 전 페이지 */
export default function HomePage() {
  return (
    <div className="flex flex-col items-center flex-1 bg-bg">
      <div className="flex-1 flex flex-col items-center justify-center text-[32px] font-semibold">
        <p>안녕하세요</p>
        <p>지원자 박민규입니다.</p>
      </div>
      <div className="py-10">
        <Button variant="secondary" size="lg">
          사진 조회하기
        </Button>
      </div>
    </div>
  );
}
