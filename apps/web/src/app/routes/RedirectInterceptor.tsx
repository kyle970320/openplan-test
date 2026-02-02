import { useEffect } from "react";
import { Navigate } from "react-router-dom";

import { FLAG_KEYS, useFlagStore } from "@/app/store/flagStore";
import { usePhotoStore } from "@/app/store/photoStore";

export default function RedirectInterceptor() {
  const photoInfo = usePhotoStore((s) => s.photoInfo);
  const { setFlag } = useFlagStore();

  useEffect(() => {
    if (photoInfo) {
      setFlag(FLAG_KEYS.ALREADY_FETCHED);
    }
  }, [photoInfo, setFlag]);

  if (photoInfo) {
    return <Navigate to="/result" replace />;
  }

  return <Navigate to="/home" replace />;
}
