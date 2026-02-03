import { Button } from "@openplan-test/ui";

import { useResult } from "../model/useResult";

import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import Skeleton from "@/shared/ui/Skeleton";
import { findLargeMediaQuery } from "@/shared/utils/mediaQuery";
import DetailCard from "@/widgets/detail/DetailCard";

export default function ResultPage() {
  const { mediaQuery } = useMediaQuery();
  const isOverMobile = findLargeMediaQuery("xs", mediaQuery);

  const { photoInfo, handleNavigateRoot } = useResult();

  if (!photoInfo) {
    return (
      <div className="h-full flex flex-col items-center justify-center gap-4">
        <Skeleton className="w-full h-50 rounded bg-gray-200" />
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
            onClick={handleNavigateRoot}
          >
            <span>이전</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
