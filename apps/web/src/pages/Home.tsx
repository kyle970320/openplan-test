import { useEffect } from "react";
import { Button } from "@openplan-test/ui";
import { useNavigate } from "react-router-dom";
import { usePhotoInfo } from "@/entities";
import { usePhotoStore } from "@/app/store/photoStore";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import { findLargeMediaQuery } from "@/shared/utils/mediaQuery";
import { useThrottle } from "@/shared/hooks/useThrottle";

export default function HomePage() {
  const navigate = useNavigate();
  const { setPhotoInfo } = usePhotoStore();
  const { refetch, isFetching } = usePhotoInfo("0", { enabled: false });
  const throttledRefetch = useThrottle(refetch, 800);
  const { mediaQuery } = useMediaQuery();
  const isOverMobile = findLargeMediaQuery("xs", mediaQuery);

  const handleFetchPhoto = async () => {
    const result = await throttledRefetch();
    if (!result) {
      return;
    }
    const { data } = result;
    if (data) {
      setPhotoInfo(data);
      navigate("/result");
    }
  };

  return (
    <div className="h-full flex flex-col items-center">
      <div className="flex-1 flex flex-col items-center justify-center text-[2rem] text-center font-semibold">
        <p>안녕하세요</p>
        <p>지원자 박민규입니다.</p>
      </div>
      <div className="flex justify-center w-full py-10">
        <Button
          variant="secondary"
          size={!isOverMobile ? "full" : "lg"}
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
