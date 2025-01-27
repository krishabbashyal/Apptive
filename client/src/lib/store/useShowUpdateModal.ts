import { create } from "zustand";
import { Application } from "@prisma/client";


// Pass data through the Archive Modal state

type UpdateModalShownState = {
  updateModalShown: boolean;
  application: Application | null;
};

type UpdateModalAction = {
  openUpdateModal: (application: Application) => void;
  closeUpdateModal: () => void;
};

const useShowUpdateModal = create<UpdateModalShownState & UpdateModalAction>((set) => ({
  updateModalShown: false,
  application: null,
  openUpdateModal: (application: Application) => set({ updateModalShown: true, application: application }),
  closeUpdateModal: () => set({ updateModalShown: false, application: null }),
}));

export default useShowUpdateModal;