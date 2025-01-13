import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

export default forwardRef(function Modal({ children }, ref) {
    const dialog = useRef();
    
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }   
        };
    });

    return createPortal(
        <dialog 
            ref={dialog} 
            className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
        >
            <div className="bg-white p-8 rounded-xl">
                {children}
                <form method="dialog" className="mt-4 text-right">
                    <button 
                        type="submit" 
                        className="bg-stone-800 text-stone-50 px-4 py-2 rounded hover:bg-stone-950 transition-colors duration-300"
                    >
                        Close
                    </button>
                </form>
            </div>
        </dialog>,
        document.getElementById('modal-root')
    );
});