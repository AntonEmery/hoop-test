import { ReactNode } from "react";

interface SidebarButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const SidebarButton = ({ children, onClick }: SidebarButtonProps ) => {
  return (
    <button
      onClick={onClick}
      className="rounded-lg flex items-center gap-4 p-2 w-full text-left text-[var(--button-text-color)] bg-[var(--button-background-color)] hover:text-[var(--button-hover-text-color)] hover:bg-[var(--button-hover-background-color)]"
    >
      {children}
    </button>
  );
}

export default SidebarButton;