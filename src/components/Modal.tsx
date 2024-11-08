import { ReactNode } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  hasCloseIcon?: boolean;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, hasCloseIcon = true, children }: ModalProps) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="border border-[var(--border-color)] rounded-lg p-6 w-[743px] h-[512px] mx-4 px-2 py-2 relative shadow-lg">
        {hasCloseIcon && (
        <button
          onClick={onClose}
          className="absolute top-9 right-6 font-bold text-2xl text-[var(--icon-color)] hover:text-[var(--icon-hover-color)]"
          aria-label="Close"
        >
          &times;
        </button>
      )}
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
