import { Button } from "@openplan-test/ui";

import { useHome } from "../model/useHome";

import { FLAG_KEYS } from "@/app/store/flagStore";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import { findLargeMediaQuery } from "@/shared/utils/mediaQuery";

export default function HomePage() {
  const { mediaQuery } = useMediaQuery();
  const isOverMobile = findLargeMediaQuery("xs", mediaQuery);
  const { handleFetchPhoto, isButtonLoading, flag } = useHome();
  console.log("homeflag", flag);
  if (flag === FLAG_KEYS.ALREADY_FETCHED) {
    return;
  }
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
