import { create } from "zustand";


// Pass data through the Archive Modal state

type ArchiveModalState = {
  archiveModalShown: boolean;
  id: string | null;
  title: string | null;
  company: string | null
};

type ArchiveModalAction = {
  openArchiveModal: (id: string, title: string, company: string) => void;
  closeArchiveModal: () => void;
};

const useShowArchiveModal = create<ArchiveModalState & ArchiveModalAction>((set) => ({
  archiveModalShown: false,
  id: null,
  title: null,
  company: null,
  openArchiveModal: (id: string, title: string, company: string) => set({ archiveModalShown: true, id: id, title: title, company: company }),
  closeArchiveModal: () => set({ archiveModalShown: false, id: null, title: null, company: null }),
}));

export default useShowArchiveModal;