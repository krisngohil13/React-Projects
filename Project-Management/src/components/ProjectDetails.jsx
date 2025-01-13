import { useRef, useState } from 'react';
import Input from './Input';
import Modal from './Modal';
import ConfirmModal from './ConfirmModal';

export default function ProjectDetails({ project, onDelete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const title = useRef();
    const description = useRef();
    const deadline = useRef();
    const modalRef = useRef();
    const confirmModalRef = useRef();

    function handleDelete() {
        confirmModalRef.current.open();
    }

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDeadline = deadline.current.value;

        if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDeadline.trim() === '') {
            modalRef.current.open();
            return;
        }

        onEdit({
            ...project,
            title: enteredTitle,
            description: enteredDescription,
            deadline: enteredDeadline,
        });
        setIsEditing(false);
    }

    function handleCancel() {
        setIsEditing(false);
    }

    return (
        <>
            <Modal ref={modalRef}>
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
                <p className="text-stone-600 mb-4">Please fill in all fields before saving.</p>
            </Modal>
            <ConfirmModal 
                ref={confirmModalRef} 
                onConfirm={() => onDelete(project.id)} 
            />
            <div className="w-[35rem] mt-16">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-3xl font-bold text-stone-600">Project Details</h1>
                    <div className="flex gap-2">
                        <button 
                            onClick={() => setIsEditing(prev => !prev)}
                            className="text-stone-600 hover:text-stone-950 px-2 py-1 rounded"
                        >
                            {isEditing ? '✕' : '✎'}
                        </button>
                        <button 
                            onClick={handleDelete}
                            className="text-stone-600 hover:text-red-500 px-2 py-1 rounded"
                        >
                            🗑
                        </button>
                    </div>
                </div>
                <div className="w-[40rem] p-6 bg-stone-200 rounded-lg shadow-md flex flex-col justify-between">
                    {!isEditing ? (
                        <div className="space-y-4">
                            <div className="mb-4">
                                <h2 className="text-stone-700 font-bold mb-1">Title</h2>
                                <p className="text-stone-600">{project.title}</p>
                            </div>
                            <div className="mb-4">
                                <h2 className="text-stone-700 font-bold mb-1">Description</h2>
                                <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
                            </div>
                            <div className="mb-4">
                                <h2 className="text-stone-700 font-bold mb-1">Due Date</h2>
                                <p className="text-stone-600">{project.deadline}</p>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="space-y-4">
                                <Input ref={title} label="Title" defaultValue={project.title} />
                                <Input ref={description} label="Description" defaultValue={project.description} isTextarea />
                                <Input ref={deadline} label="Due Date" type="date" defaultValue={project.deadline} />
                            </div>
                            <menu className="flex items-center justify-end gap-4 mt-4">
                                <li>
                                    <button 
                                        onClick={handleCancel}
                                        className="text-stone-800 hover:text-stone-950 px-4 py-2 rounded"
                                    >
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
                        </>
                    )}
                </div>
            </div>
        </>
    );
} 