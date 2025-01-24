"use client";

import React, { useState } from "react";

import { X } from "@phosphor-icons/react";

import useShowArchiveModal from "@/lib/store/useShowArchiveModal";



function ConfirmArchiveModal() {
  const { archiveModalShown, archiveModalData, closeArchiveModal } =
  useShowArchiveModal();
  const [isHovered, setIsHovered] = useState(false);

  return (
    archiveModalShown && (
      <div
        onClick={() => {
          closeArchiveModal();
        }}
        className="absolute z-10 flex h-full w-[calc(100%-15rem)] items-center justify-center bg-black bg-opacity-85"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-[38rem] bg-foreground"
        >
          <div className="p-10">
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => {
                  closeArchiveModal();
                  setIsHovered(false);
                }}
              >
                <X
                  className="cursor-pointer"
                  onMouseOver={() => setIsHovered(true)}
                  onMouseOut={() => setIsHovered(false)}
                  color={isHovered ? "#f25757" : "#FFFFFF"}
                  size={26}
                />
              </button>
            </div>
            <h1 className="text-left text-2xl font-medium sm:text-3xl">
              Archive this application?
            </h1>
            <p className="mt-0.5">You can always unarchive it later</p>
            <div className="mt-6 flex flex-col gap-4 gap-y-6 sm:grid sm:grid-cols-2"></div>
          <p> id:  <span className="font-bold text-green-500">{archiveModalData}</span></p>
          </div>

        </div>
      </div>
    )
  );
}

export default ConfirmArchiveModal;
