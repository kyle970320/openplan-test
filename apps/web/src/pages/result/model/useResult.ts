import { Snackbar } from "@minus-ui/core";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { usePhotoStore } from "@/entities/photo/store/photoStore";
import { FLAG_KEYS, useFlagStore } from "@/shared/store/flagStore";

export const useResult = () => {
  const navigate = useNavigate();
  const photoInfo = usePhotoStore((s) => s.photoInfo);
  const flag = useFlagStore((s) => s.flag);
  const setFlag = useFlagStore((s) => s.setFlag);
  const clearFlag = useFlagStore((s) => s.clearFlag);

  const handleNavigateRoot = () => {
    navigate("/");
  };

  useEffect(() => {
    if (flag === FLAG_KEYS.ALREADY_FETCHED && photoInfo) {
      Snackbar.show({ type: "info", message: "조회 이력이 있어 상세페이지로 이동되었습니다." });
      clearFlag();
    }
  }, [flag, photoInfo, clearFlag]);

  useEffect(() => {
    if (!photoInfo) {
      const timer = setTimeout(() => {
        setFlag(FLAG_KEYS.NO_PHOTO_INFO);
        navigate("/", { replace: true });
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [photoInfo, navigate, setFlag]);

  return { photoInfo, handleNavigateRoot };
};
