import { Button } from "@openplan-test/ui";
import { useNavigate } from "react-router-dom";
import { usePhotoInfo } from "../entities";
import { usePhotoStore } from "../app/store/photoStore";

export default function HomePage() {
  const navigate = useNavigate();
  const setPhotoInfo = usePhotoStore((s) => s.setPhotoInfo);
  const { refetch, isFetching } = usePhotoInfo("0", { enabled: false });

  const handleFetchPhoto = async () => {
    const { data } = await refetch();
    if (data) {
      setPhotoInfo(data);
      navigate("/result");
    }
  };

  return (
    <div className="flex flex-col items-center flex-1 bg-bg">
      <div className="flex-1 flex flex-col items-center justify-center text-[32px] font-semibold">
        <p>안녕하세요</p>
        <p>지원자 박민규입니다.</p>
      </div>
      <div className="py-10">
        <Button
          variant="secondary"
          size="lg"
          onClick={handleFetchPhoto}
          disabled={isFetching}
          loading={isFetching}
        >
          사진 조회하기
        </Button>
      </div>
    </div>
  );
}
