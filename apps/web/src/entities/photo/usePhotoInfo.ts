import type { UseQueryOptions } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { getPicsumPhotoInfo } from "./api";
import type { PicsumPhotoInfo } from "./types";

const QUERY_KEY = ["picsum", "photo", "info"] as const;

export function usePhotoInfo(
  photoId = "0",
  options?: Omit<UseQueryOptions<PicsumPhotoInfo>, "queryKey" | "queryFn">
) {
  return useQuery({
    queryKey: [...QUERY_KEY, photoId],
    queryFn: () => getPicsumPhotoInfo(photoId),
    ...options,
  });
}
