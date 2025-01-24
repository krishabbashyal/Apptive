import { create } from "zustand";

type ApplicationModalState = {
  applicationModalShown: boolean;
};

type ApplicationModalAction = {
  openApplicationModal: () => void;
  closeApplicationModal: () => void;
};

const useShowApplicationModal = create<ApplicationModalState & ApplicationModalAction>((set) => ({
  applicationModalShown: false,
  openApplicationModal: () => set({ applicationModalShown: true }),
  closeApplicationModal: () => set({ applicationModalShown: false }),
}));

export default useShowApplicationModal;