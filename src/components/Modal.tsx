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
      <div className="bg-[var(--color-light-black)] rounded-lg p-6 w-full max-w-md mx-4 relative shadow-lg">
        {hasCloseIcon && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[var(--icon-color)] hover:text-[var(--icon-hover-color)]"
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
