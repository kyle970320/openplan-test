import { Snackbar } from "@minus-ui/core";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { usePhotoInfo } from "@/entities";
import { usePhotoStore } from "@/entities/photo/store/photoStore";
import { useThrottle } from "@/shared/hooks/useThrottle";
import { FLAG_KEYS, useFlagStore } from "@/shared/store/flagStore";

export const useHome = () => {
  const navigate = useNavigate();

  const photoInfo = usePhotoStore((s) => s.photoInfo);
  const setPhotoInfo = usePhotoStore((s) => s.setPhotoInfo);
  const flag = useFlagStore((s) => s.flag);
  const clearFlag = useFlagStore((s) => s.clearFlag);

  const { refetch, isFetching } = usePhotoInfo("0", { enabled: false });
  const { throttledFunc: throttledRefetch, isThrottledLoading } = useThrottle(refetch, 800);

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

  return { handleFetchPhoto, isButtonLoading, flag };
};
