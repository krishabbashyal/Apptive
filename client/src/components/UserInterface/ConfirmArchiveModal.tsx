"use client";

import React, { useState } from "react";

import { X } from "@phosphor-icons/react";
import CustomButton from "./CustomButton";

import useShowArchiveModal from "@/lib/store/useShowArchiveModal";

const ConfirmArchiveModal = () => {
  const { archiveModalShown, id, title, company, closeArchiveModal } =
    useShowArchiveModal();
  const [isHovered, setIsHovered] = useState(false);

  const handleArchiveApplication = (id: string | null) => {
    if (!id) return;
    console.log("Archive application: ", id);
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
            <h1 className="text-left text-2xl font-medium sm:text-3xl">
              Archive this application?
            </h1>
            <p className="mt-0.5">You can always unarchive it later</p>
            <div className="mt-6 text-lg">
              <div className="flex w-full items-center justify-center gap-x-2 rounded-lg border border-dashed border-spacer bg-accentHighlight/60 p-4">
                <p className="">{company}</p>
                <p>|</p>
                <p className="font-extralight">{title}</p>
              </div>
            </div>
            <p className="absolute mt-6 text-sm text-spacer">
              id: <span className="font-bold text-danger/30">{id}</span>
            </p>
            <div className="mt-6 flex justify-end gap-4">
              <CustomButton
                label="Cancel"
                onClick={closeArchiveModal}
                customClasses="bg-spacer"
              />

              <CustomButton
                label="Archive"
                onClick={() => handleArchiveApplication(id)}
                customClasses="bg-danger"
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ConfirmArchiveModal;
