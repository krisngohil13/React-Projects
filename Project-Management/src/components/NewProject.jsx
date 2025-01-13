import Input from "./Input";
import { useRef } from "react";
export default function NewProject({ onAdd }) {
    const title = useRef();
    const description = useRef();
    const deadline = useRef();

    function handleSave(){
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDeadline = deadline.current.value;


        onAdd({
            title:enteredTitle,
            description:enteredDeadline,
            deadline:enteredDeadline,
        })

        if (!enteredTitle.trim() || !enteredDescription.trim() || !enteredDeadline.trim()) {
            alert("All fields are required!");
            return;
        }

        // Proceed with saving the project
        console.log("Project saved:", { enteredTitle, enteredDescription, enteredDeadline });
    }

 return(
    <div className="flex items-center justify-center min-h-screen p-4 w-2/3 ">
        <div className="w-[40rem]  p-6 bg-stone-200 rounded-lg shadow-md flex flex-col justify-between mx-auto ">
            <div className="space-y-4">
                <Input ref={title}label="Project Name" />
                <Input ref={description} label="Project Description" isTextarea />
                <Input ref={deadline} label="Project Deadline" type="date" />
            </div>
            <menu className="flex items-centre justify-end mt-6 gap-4 my-4">
                <li>
                    <button className="bg-white-500 text-black px-4 py-2 rounded hover:bg-red-700 transition-colors duration-300">Cancel</button>
                </li>
                <li>
                    <button onClick={handleSave} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-300">Save</button>
                </li>    
            </menu>
        </div>
    </div>
 );   
}