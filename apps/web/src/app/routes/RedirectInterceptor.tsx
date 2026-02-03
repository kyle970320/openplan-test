import { useEffect } from "react";
import { Navigate } from "react-router-dom";

import { usePhotoStore } from "@/entities/photo/store/photoStore";
import Home from "@/pages/home/ui/Home";
import { FLAG_KEYS, useFlagStore } from "@/shared/store/flagStore";

export default function RedirectInterceptor() {
  const photoInfo = usePhotoStore((s) => s.photoInfo);
  const flag = useFlagStore((s) => s.flag);
  const setFlag = useFlagStore((s) => s.setFlag);
  const isFirstVisit = flag === null;
  const isRedirect = photoInfo && isFirstVisit;

  useEffect(() => {
    if (isRedirect) {
      setFlag(FLAG_KEYS.ALREADY_FETCHED);
      return;
    }
    if (isFirstVisit) {
      setFlag(FLAG_KEYS.EMPTY);
      return;
    }
  }, [photoInfo, isFirstVisit, isRedirect, setFlag]);

  if (isRedirect) {
    return <Navigate to="/result" replace />;
  }

  return <Home />;
}
