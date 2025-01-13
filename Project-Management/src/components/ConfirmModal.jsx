import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

const ConfirmModal = forwardRef(function ConfirmModal({ onConfirm }, ref) {
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
                <h2 className="text-xl font-bold text-stone-700 my-4">Are you sure?</h2>
                <p className="text-stone-600 mb-4">Do you really want to delete this project?</p>
                <form method="dialog" className="flex items-center justify-end gap-4 mt-4">
                    <button 
                        type="submit"
                        className="text-stone-800 hover:text-stone-950 px-4 py-2 rounded"
                    >
                        No
                    </button>
                    <button 
                        type="submit"
                        onClick={onConfirm}
                        className="bg-red-600 text-stone-50 px-4 py-2 rounded hover:bg-red-700 transition-colors duration-300"
                    >
                        Yes, Delete
                    </button>
                </form>
            </div>
        </dialog>,
        document.getElementById('modal-root')
    );
});

export default ConfirmModal; 