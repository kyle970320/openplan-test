import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { PhotoInfoType } from "../../entities/photo";

interface PhotoState {
  photoInfo: PhotoInfoType | null;
  setPhotoInfo: (data: PhotoInfoType | null) => void;
}

const STORAGE_KEY = "web-photo-store";

export const usePhotoStore = create<PhotoState>()(
  persist(
    (set) => ({
      photoInfo: null,
      setPhotoInfo: (data) => set({ photoInfo: data }),
    }),
    { name: STORAGE_KEY }
  )
);
