import { ReactNode } from "react";
import classNames from "classnames";

interface SidebarButtonProps {
  children: ReactNode;
  onClick: () => void;
  isActive?: boolean;
}

const SidebarButton = ({ children, onClick, isActive }: SidebarButtonProps ) => {
  return (
    <button
      onClick={onClick}
      className={classNames("rounded-lg flex items-center gap-4 p-2 w-full text-left text-[var(--button-text-color)] bg-[var(--button-background-color)] hover:text-[var(--button-hover-text-color)] hover:bg-[var(--button-hover-background-color)]",
        { "border border-[var(--button-border-active)]": isActive },
      )}
    >
      {children}
    </button>
  );
}

export default SidebarButton;