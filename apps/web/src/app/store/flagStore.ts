import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const STORAGE_KEY = "web-flag-store";

export const FLAG_KEYS = {
  NO_PHOTO_INFO: "no-photo-info",
  ALREADY_FETCHED: "already-fetched",
} as const;

interface FlagState {
  flag: (typeof FLAG_KEYS)[keyof typeof FLAG_KEYS] | null;
  setFlag: (flag: (typeof FLAG_KEYS)[keyof typeof FLAG_KEYS] | null) => void;
  clearFlag: () => void;
}

export const useFlagStore = create<FlagState>()(
  persist(
    (set) => ({
      flag: null,
      setFlag: (flag) => set({ flag }),
      clearFlag: () => set({ flag: null }),
    }),
    {
      name: STORAGE_KEY,
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
