import axios from "axios";
import type { PicsumPhotoInfo } from "./types";

const BASE_URL = import.meta.env.VITE_PICSUM_BASE_URL;

export async function getPicsumPhotoInfo(photoId: string): Promise<PicsumPhotoInfo> {
  const { data } = await axios.get<PicsumPhotoInfo>(`${BASE_URL}/id/${photoId}/info`);
  return data;
}
