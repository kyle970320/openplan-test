import { useQuery } from "@tanstack/react-query";
import type { UseQueryOptions } from "@tanstack/react-query";

import { getPhotoInfo } from "./api";
import type { PhotoInfoType } from "./types";

const QUERY_KEY = ["picsum", "photo", "info"] as const;

export function usePhotoInfo(
  photoId = "0",
  options?: Omit<UseQueryOptions<PhotoInfoType>, "queryKey" | "queryFn">
) {
  return useQuery({
    queryKey: [...QUERY_KEY, photoId],
    queryFn: () => getPhotoInfo(photoId),
    ...options,
  });
}
