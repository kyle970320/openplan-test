import { Button } from "@openplan-test/ui";
import { useNavigate } from "react-router-dom";
import { usePhotoInfo } from "@/entities";
import { usePhotoStore } from "@/app/store/photoStore";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import { findLargeMediaQuery } from "@/shared/utils/mediaQuery";
import { useThrottle } from "@/shared/hooks/useThrottle";
import { useEffect } from "react";
import { Snackbar } from "@minus-ui/core";
import { FLAG_KEYS, useFlagStore } from "@/app/store/flagStore";

export default function HomePage() {
  const navigate = useNavigate();

  const photoInfo = usePhotoStore((s) => s.photoInfo);
  const setPhotoInfo = usePhotoStore((s) => s.setPhotoInfo);
  const flag = useFlagStore((s) => s.flag);
  const clearFlag = useFlagStore((s) => s.clearFlag);

  const { refetch, isFetching } = usePhotoInfo("0", { enabled: false });
  const { throttledFunc: throttledRefetch, isThrottledLoading } = useThrottle(refetch, 800);
  const { mediaQuery } = useMediaQuery();
  const isOverMobile = findLargeMediaQuery("xs", mediaQuery);

  const isButtonLoading = isFetching || isThrottledLoading;

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

  useEffect(() => {
    if (flag === FLAG_KEYS.NO_PHOTO_INFO && !photoInfo) {
      Snackbar.show({ type: "info", message: "조회 이력이 없어 홈페이지로 이동되었습니다." });
      clearFlag();
    }
  }, [flag, photoInfo, clearFlag]);

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
          disabled={isButtonLoading}
          loading={isButtonLoading}
        >
          사진 조회하기
        </Button>
      </div>
    </div>
  );
}
