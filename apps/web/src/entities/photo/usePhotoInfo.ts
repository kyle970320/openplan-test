import { useQuery } from "@tanstack/react-query";
import { getPicsumPhotoInfo } from "./api";

const QUERY_KEY = ["picsum", "photo", "info"] as const;

export function usePhotoInfo(photoId = "0") {
  return useQuery({
    queryKey: [...QUERY_KEY, photoId],
    queryFn: () => getPicsumPhotoInfo(photoId),
  });
}
