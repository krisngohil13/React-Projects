import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";

export default function NewProject({ onAdd }) {
    const title = useRef();
    const description = useRef();
    const deadline = useRef();
    const modalRef = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDeadline = deadline.current.value;

        // Validation should happen before saving
        if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDeadline.trim() === '') {
            modalRef.current.open();
            return;
        }

        // If validation passes, save the project with correct values
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
            <div className="flex items-center justify-center min-h-screen p-4 w-2/3">
                <div className="w-[40rem] p-6 bg-stone-200 rounded-lg shadow-md flex flex-col justify-between mx-auto">
                    <div className="space-y-4">
                        <Input ref={title} label="Project Name" />
                        <Input ref={description} label="Project Description" isTextarea />
                        <Input ref={deadline} label="Project Deadline" type="date" />
                    </div>
                    <menu className="flex items-center justify-end mt-6 gap-4 my-4">
                        <li>
                            <button className="text-stone-800 hover:text-stone-950 px-4 py-2 rounded">
                                Cancel
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={handleSave} 
                                className="bg-stone-800 text-stone-50 px-4 py-2 rounded hover:bg-stone-950 transition-colors duration-300"
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