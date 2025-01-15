import { create } from "zustand";

type State = {
  applicationModalShown: boolean;
}

type Action = {
  openApplicationModal: () => void;
  closeApplicationModal: () => void;
}

const useShowApplicationModal = create<State & Action>((set) => ({
  applicationModalShown: false,
  openApplicationModal: () => set({ applicationModalShown: true }),
  closeApplicationModal: () => set({ applicationModalShown: false }),
}))

export default useShowApplicationModal