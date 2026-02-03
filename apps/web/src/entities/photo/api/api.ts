import axios from "axios";

import type { PhotoInfoType } from "../types/types";

const BASE_URL = import.meta.env.VITE_PICSUM_BASE_URL;

export async function getPhotoInfo(photoId: string): Promise<PhotoInfoType> {
  const { data } = await axios.get<PhotoInfoType>(`${BASE_URL}/id/${photoId}/info`);
  return data;
}
