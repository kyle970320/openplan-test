import { create } from "zustand";

export const FLAG_KEYS = {
  NO_PHOTO_INFO: "no-photo-info",
  ALREADY_FETCHED: "already-fetched",
  ALLOW_ROOT: "allow-root",
  EMPTY: "empty",
} as const;

interface FlagState {
  flag: (typeof FLAG_KEYS)[keyof typeof FLAG_KEYS] | null;
  setFlag: (flag: (typeof FLAG_KEYS)[keyof typeof FLAG_KEYS] | null) => void;
  clearFlag: () => void;
}

export const useFlagStore = create<FlagState>()((set) => ({
  flag: null,
  setFlag: (flag) => set({ flag }),
  clearFlag: () => set({ flag: FLAG_KEYS.EMPTY }),
}));
