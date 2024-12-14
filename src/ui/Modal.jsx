import { FaRegTimesCircle } from "react-icons/fa";
import useOutsideClick from "../hooks/useOutsideClick";

const Modal = ({ open, onClose, children }) => {
  const ref = useOutsideClick(onClose, true);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-85">
      <div
        ref={ref}
        className="modal w-1/2 md:w-1/3 h-auto overflow-y-scroll no-scrollbar bg-blue-950 rounded-lg shadow-lg p-8 relative"
      >
        <button className="absolute top-3 right-3" onClick={onClose}>
          <FaRegTimesCircle className="text-red-600 w-6 h-6" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
