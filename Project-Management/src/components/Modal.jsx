import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal();
    }
  }));

  return createPortal(
    <dialog 
      ref={dialog} 
      className="backdrop:bg-stone-900/90 backdrop:backdrop-blur-sm 
        fixed inset-0 
        w-[90%] max-w-md 
        p-4 md:p-6 
        rounded-lg shadow-xl 
        animate-fadeIn"
    >
      <div className="bg-white rounded-lg p-4 md:p-6">
        {children}
        <form method="dialog" className="mt-4 text-right">
          <button 
            className="bg-stone-800 text-stone-50 
              px-3 md:px-4 py-2 
              text-sm md:text-base
              rounded 
              hover:bg-stone-950 
              transition-all duration-300
              hover:scale-105 active:scale-95"
          >
            Okay
          </button>
        </form>
      </div>
    </dialog>,
    document.getElementById('modal-root')
  );
});

export default Modal;