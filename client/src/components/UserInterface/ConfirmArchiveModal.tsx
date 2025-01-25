"use client";

import React, { useState } from "react";

import { X } from "@phosphor-icons/react";
import CustomButton from "./CustomButton";

import useShowArchiveModal from "@/lib/store/useShowArchiveModal";

function ConfirmArchiveModal() {
  const { archiveModalShown, id, title, company, closeArchiveModal } =
    useShowArchiveModal();
  const [isHovered, setIsHovered] = useState(false);

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
          className="w-[36rem] bg-foreground rounded-lg border border-spacer/50"
        >
          <div className="py-6 px-10">
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
              <div className="bg-accentHighlight/60 rounded-lg border border-dashed items-center justify-center flex border-spacer p-4 w-full gap-x-2">
                <p className="">{company}</p>
                <p>|</p>
                <p className="font-extralight">{title}</p>
              </div>
            </div>
            <p className="mt-6 absolute text-sm text-spacer">id: <span className="font-bold text-danger/30">{id}</span></p>
            <div className="mt-6 flex justify-end gap-4">
              <CustomButton
                label="Cancel"
                onClick={closeArchiveModal}
                customClasses="bg-spacer"
              />

              <CustomButton
                label="Archive"
                onClick={closeArchiveModal}
                customClasses="bg-danger"
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default ConfirmArchiveModal;
