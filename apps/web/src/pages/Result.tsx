import { Button } from "@openplan-test/ui";
import { usePhotoStore } from "../app/store/photoStore";
import { useNavigate } from "react-router-dom";
import DetailCard from "../widgets/detail/DetailCard";
import { useMediaQuery } from "../shared/hooks/useMediaQuery";
import { findLargeMediaQuery } from "../shared/utils/mediaQuery";
import { Snackbar } from "@minus-ui/core";
import { useEffect } from "react";
import { useFlagStore } from "@/app/store/flagStore";

export default function ResultPage() {
  const navigate = useNavigate();
  const photoInfo = usePhotoStore((s) => s.photoInfo);
  const flag = useFlagStore((s) => s.flag);
  const setFlag = useFlagStore((s) => s.setFlag);
  const clearFlag = useFlagStore((s) => s.clearFlag);

  const { mediaQuery } = useMediaQuery();
  const isOverMobile = findLargeMediaQuery("xs", mediaQuery);

  useEffect(() => {
    if (flag === "already-fetched" && photoInfo) {
      Snackbar.show({ type: "info", message: "조회 이력이 있어 상세페이지로 이동되었습니다." });
      clearFlag();
    }
  }, [flag, photoInfo, clearFlag]);

  useEffect(() => {
    if (!photoInfo) {
      const timer = setTimeout(() => {
        setFlag("no-photo-info");
        navigate("/home", { state: "no-photo-info", replace: true });
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [photoInfo, navigate, setFlag]);

  if (!photoInfo) {
    return (
      <div className="h-full flex flex-col items-center justify-center gap-4">
        <p className="text-gray-600">조회된 사진 정보가 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="relative h-full flex flex-col items-center gap-6">
      <div className="fixed top-0 left-0 w-full h-full scale-115">
        <img
          src={photoInfo.download_url}
          alt={"info-image"}
          className="absolute top-0 left-0 w-full h-full object-cover opacity-40 blur-[6px]"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-transparent to-[#ffffff]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/30" />
        <img
          src="/noiseLayer.png"
          alt="noise-layer"
          className="absolute top-0 left-0 w-full h-full rounded object-cover"
        />
      </div>
      <div className="flex-1 relative flex flex-col md:flex-row md:gap-10 w-full items-center justify-center">
        <div className="py-10 md:p-0 md:w-1/2">
          <img src={photoInfo.download_url} alt={photoInfo.author} className="rounded-3xl" />
        </div>
        <div className="flex-1 flex flex-col items-center gap-3 w-full">
          <DetailCard photoInfo={photoInfo} />
          <Button
            variant="secondary"
            size={!isOverMobile ? "full" : "sm"}
            onClick={() => navigate("/home")}
          >
            <span>이전</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
