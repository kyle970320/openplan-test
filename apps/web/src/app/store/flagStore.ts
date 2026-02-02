import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type FlagKey = "no-photo-info" | "already-fetched";

interface FlagState {
  flag: FlagKey | null;
  setFlag: (flag: FlagKey | null) => void;
  clearFlag: () => void;
}

const STORAGE_KEY = "web-flag-store";

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
