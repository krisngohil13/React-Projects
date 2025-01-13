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

            <div className="mt-24 md:mt-32 mx-auto max-w-[40rem] px-4 md:px-8 animate-slideIn">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <h1 className="text-2xl md:text-3xl font-bold text-stone-600">
                        {isEditing ? 'Edit Project' : project.title}
                    </h1>
                    <div className="flex items-center gap-2">
                        <button 
                            onClick={() => setIsEditing(prev => !prev)}
                            className="text-stone-600 hover:text-stone-950 p-2 rounded transition-all
                                duration-300 hover:scale-110 active:scale-95"
                        >
                            {isEditing ? '✕' : '✎'}
                        </button>
                        <button 
                            onClick={handleDelete}
                            className="text-stone-600 hover:text-red-500 p-2 rounded transition-all
                                duration-300 hover:scale-110 active:scale-95"
                        >
                            🗑
                        </button>
                    </div>
                </div>

                <div className="bg-stone-200 rounded-lg shadow-md p-4 md:p-8">
                    {!isEditing ? (
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-stone-700 font-bold text-lg md:text-xl mb-2">Description</h2>
                                <p className="text-stone-600 whitespace-pre-wrap text-sm md:text-base">
                                    {project.description}
                                </p>
                            </div>
                            <div>
                                <h2 className="text-stone-700 font-bold text-lg md:text-xl mb-2">Due Date</h2>
                                <p className="text-stone-600 text-sm md:text-base">
                                    {new Date(project.deadline).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </p>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="space-y-4">
                                <Input ref={title} label="Title" defaultValue={project.title} />
                                <Input ref={description} label="Description" textarea defaultValue={project.description} />
                                <Input ref={deadline} label="Due Date" type="date" defaultValue={project.deadline} />
                            </div>
                            <menu className="flex items-center justify-end gap-4 mt-8">
                                <li>
                                    <button 
                                        onClick={handleCancel}
                                        className="text-stone-800 hover:text-stone-950 px-4 py-2 rounded 
                                            transition-all duration-300 hover:scale-105 active:scale-95"
                                    >
                                        Cancel
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        onClick={handleSave}
                                        className="bg-stone-800 text-stone-50 px-4 py-2 rounded 
                                            hover:bg-stone-950 transition-all duration-300
                                            hover:scale-105 active:scale-95"
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