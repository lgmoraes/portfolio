import { create } from "zustand";

type StoreState = {
  hash: string;
  setHash: (newSection: string) => void;
};

const useStore = create<StoreState>((set) => ({
  hash: "",
  setHash: (newSection) => set(() => ({ hash: newSection })),
}));

export default useStore;
