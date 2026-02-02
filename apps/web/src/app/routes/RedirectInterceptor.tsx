import { Navigate } from "react-router-dom";
import { usePhotoStore } from "@/app/store/photoStore";
import { useFlagStore } from "../store/flagStore";
import { useEffect } from "react";

export default function RedirectInterceptor() {
  const photoInfo = usePhotoStore((s) => s.photoInfo);
  const { setFlag } = useFlagStore();

  useEffect(() => {
    if (photoInfo) {
      setFlag("already-fetched");
    }
  }, [photoInfo, setFlag]);

  if (photoInfo) {
    return <Navigate to="/result" replace />;
  }

  return <Navigate to="/home" replace />;
}
