"use client";

import React, { useState } from "react";
import { archiveApplication } from "@/app/(main)/dashboard/actions";
import { X } from "@phosphor-icons/react";
import CustomButton from "./CustomButton";

import useShowArchiveModal from "@/lib/store/useShowArchiveModal";

const ConfirmArchiveModal = () => {
  const { archiveModalShown, id, title, company, closeArchiveModal } =
    useShowArchiveModal();
  const [isHovered, setIsHovered] = useState(false);

  const handleArchiveApplication = async (id: string | null) => {
    if (!id) return;
    await archiveApplication(id);
  };

  return (
    archiveModalShown && (
      <div
        onClick={() => {
          closeArchiveModal();
        }}
        className="absolute z-10 flex h-full w-[calc(100%-15rem)] items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-[36rem] rounded-lg border border-spacer/50 bg-foreground"
        >
          <div className="px-10 py-6">
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => {
                  closeArchiveModal();
                  setIsHovered(false);
                }}
              >
                <X
                  className="cursor-pointer rounded p-1 hover:cursor-pointer hover:bg-spacer hover:bg-opacity-25"
                  onMouseOver={() => setIsHovered(true)}
                  onMouseOut={() => setIsHovered(false)}
                  color={isHovered ? "#f25757" : "#FFFFFF"}
                  size={32}
                />
              </button>
            </div>
            <div className="border-b border-spacer/50 pb-6">
              <h1 className="text-2xl font-medium sm:text-3xl ">
                Archive application?
              </h1>
              <p className="mt-0.5">You can always revert this from the archive tab</p>
            </div>
            <div className="mt-6 flex justify-end gap-4">
              <CustomButton
                label="Cancel"
                onClick={closeArchiveModal}
                customClasses="border-2 border-spacer w-32"
              />

              <CustomButton
                label="Archive"
                onClick={() => handleArchiveApplication(id)}
                customClasses="bg-danger w-32"
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ConfirmArchiveModal;
