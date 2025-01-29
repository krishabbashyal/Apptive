import React, { useState, useRef, useEffect } from "react";
import { Application } from "@prisma/client";
import {
  DotsThreeVertical,
  PencilSimple,
  Link as LinkIcon,
  Archive,
} from "@phosphor-icons/react";
import useShowUpdateModal from "@/lib/store/useShowUpdateModal";
import { archiveApplication } from "@/app/(main)/dashboard/actions";

interface ButtonProps {
  application: Application;
  setIsOpen: (isOpen: boolean) => void;
}

const EditButton = ({ application, setIsOpen }: ButtonProps) => {
  const handleEditButtonPressed = () => {
    openUpdateModal(application);
    setIsOpen(false);
    console.log("Edit button pressed", application);
  };
  const { openUpdateModal } = useShowUpdateModal();
  return (
    <button
      onClick={handleEditButtonPressed}
      className="flex items-center gap-x-4 border-b border-spacer/30 px-4 py-2.5 text-left transition-colors last:border-0 hover:text-yellow-500"
    >
      <PencilSimple size={20} />
      <p>Edit</p>
    </button>
  );
};

const LinkButton = () => {
  return (
    <button
      onClick={() => {}}
      className="flex items-center gap-x-4 border-b border-spacer/30 px-4 py-2.5 text-left transition-colors last:border-0 hover:text-blue-500"
    >
      <LinkIcon size={20} />
      <p>Application link</p>
    </button>
  );
};

const ArchiveButton = ({ application, setIsOpen }: ButtonProps) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const handleArchiveApplication = async (id: string | null) => {
    if (!id) return;
    await archiveApplication(id);
    setShowConfirmation(false);
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={() => setShowConfirmation(true)}
        className="flex items-center gap-x-4 border-spacer/30 px-4 py-2.5 text-left transition-colors hover:text-danger"
      >
        <Archive className={showConfirmation ? "text-danger" : ""} size={20} />
        <p className={showConfirmation ? "text-danger" : ""}>
          {showConfirmation ? "Confirm archive?" : "Archive"}
        </p>
      </button>

      {showConfirmation && (
        <div className="mt-1 flex flex-row justify-between gap-x-2 px-4 pb-2">
          <button
            className="rounded-lg border border-spacer/60 p-1.5 px-3 font-extralight hover:bg-spacer/10"
            onClick={() => setShowConfirmation(false)}
          >
            Cancel
          </button>
          <button
            className="rounded-lg border border-danger/25 p-1.5 px-3 text-danger hover:bg-danger/10"
            onClick={() => handleArchiveApplication(application.id)}
          >
            Archive
          </button>
        </div>
      )}
    </div>
  );
};

interface ApplicationRowActionsProps {
  application: Application;
}

const ApplicationRowActions = ({ application }: ApplicationRowActionsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`mt-1.5 rounded-lg border bg-spacer/20 p-0.5 text-gray-400 transition-all duration-200 ease-in-out hover:scale-110 hover:border-accent hover:bg-spacer/50 ${isOpen ? "border-accent" : "border-spacer/20"} hover:text-gray-200`}
      >
        <DotsThreeVertical size={24} />
      </button>
      {isOpen && (
        <div className="absolute right-[150px] z-10 mt-1 w-52 rounded-lg border border-spacer bg-foreground py-1 shadow-lg">
          <div className="flex flex-col">
            <EditButton application={application} setIsOpen={setIsOpen} />
            <LinkButton />
            <ArchiveButton application={application} setIsOpen={setIsOpen} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicationRowActions;
