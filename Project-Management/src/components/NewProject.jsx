import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {
    const title = useRef();
    const description = useRef();
    const deadline = useRef();
    const modalRef = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDeadline = deadline.current.value;

        if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDeadline.trim() === '') {
            modalRef.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            deadline: enteredDeadline,
        });
    }

    return (
        <>
            <Modal ref={modalRef}>
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
                <p className="text-stone-600 mb-4">Please fill in all fields before saving.</p>
            </Modal>
            <div className="max-w-[90%] w-[35rem] mx-auto mt-16">
                <div className="bg-stone-200 rounded-lg p-6 shadow-md">
                    <div className="space-y-4">
                        <Input ref={title} label="Project Name" />
                        <Input ref={description} label="Project Description" textarea />
                        <Input ref={deadline} label="Project Deadline" type="date" />
                    </div>
                    <menu className="flex justify-end gap-4 mt-8">
                        <li>
                            <button 
                                onClick={onCancel}
                                className="px-6 py-2 rounded-md text-stone-800 hover:text-stone-950"
                            >
                                Cancel
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={handleSave}
                                className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                            >
                                Save
                            </button>
                        </li>    
                    </menu>
                </div>
            </div>
        </>
    );   
}