import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { PicsumPhotoInfo } from "../../entities/photo";

interface PhotoState {
  photoInfo: PicsumPhotoInfo | null;
  setPhotoInfo: (data: PicsumPhotoInfo | null) => void;
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
