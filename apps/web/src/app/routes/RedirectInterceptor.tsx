import { Navigate } from "react-router-dom";
import { usePhotoStore } from "@/app/store/photoStore";

export default function RedirectInterceptor() {
  const { getPhotoInfo } = usePhotoStore();
  const currentPhotoInfo = getPhotoInfo();
  if (currentPhotoInfo) {
    return <Navigate to="/result" replace state="already-fetched" />;
  }

  return <Navigate to="/home" replace />;
}
