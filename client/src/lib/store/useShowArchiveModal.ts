import { create } from "zustand";


// Pass data through the Archive Modal state

type ArchiveModalState = {
  archiveModalShown: boolean;
  archiveModalData: string | null;
};

type ArchiveModalAction = {
  openArchiveModal: (data: string) => void;
  closeArchiveModal: () => void;
};

const useShowArchiveModal = create<ArchiveModalState & ArchiveModalAction>((set) => ({
  archiveModalShown: false,
  archiveModalData: null,
  openArchiveModal: (data: string) => set({ archiveModalShown: true, archiveModalData: data }),
  closeArchiveModal: () => set({ archiveModalShown: false, archiveModalData: null }),
}));

export default useShowArchiveModal;