import React, { useState, useRef, useEffect } from "react";
import { Application } from "@prisma/client";
import { 
  DotsThreeVertical, 
  PencilSimple, 
  Link as LinkIcon, 
  Archive, 
} from "@phosphor-icons/react";

interface ActionButtonProps {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ label, icon, onClick }) => (
  <button
    onClick={onClick}
    className="px-4 flex items-center gap-x-4 py-2.5 text-left border-b last:border-0 border-spacer/20 hover:bg-accent/10 transition-colors"
  >
    {icon}
    {label}
  </button>
);

interface ApplicationRowActionsProps {
  application: Application;
}

const ApplicationRowActions: React.FC<ApplicationRowActionsProps> = ({ application }) => {
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

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleArchive = () => {
  };

  const actionButtons = [
    { 
      label: "Edit", 
      icon: <PencilSimple size={20} />,
      onClick: () => {} 
    },
    { 
      label: "Application URL", 
      icon: <LinkIcon size={20} />,
      onClick: () => {} 
    },
    { 
      label: "Archive", 
      icon: <Archive size={20} />,
      onClick: handleArchive 
    }
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-lg border border-spacer/20 bg-spacer/20 p-0.5 mt-1.5 text-gray-400 transition-all duration-200 ease-in-out hover:scale-110 hover:border-accent hover:bg-spacer/50 hover:text-gray-200"
      >
        <DotsThreeVertical size={24} />
      </button>

      {isOpen && (
        <div className="absolute right-0 border border-spacer z-10 mt-2 w-48 rounded-lg bg-foreground py-1 shadow-lg">
          <div className="flex flex-col">
            {actionButtons.map((action) => (
              <ActionButton
                key={action.label}
                label={action.label}
                icon={action.icon}
                onClick={action.onClick}
                />
              ))}
          </div>
        </div>
      )}
    

    </div>
  );
};

export default ApplicationRowActions;