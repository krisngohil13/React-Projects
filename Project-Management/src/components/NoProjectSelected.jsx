import image from '../assets/no-projects.png'

export default function NoProjectSelected({onStartAddProject}){
    return(
        <div className="flex flex-col w-2/3 items-center justify-center h-full text-center" style={{ fontFamily: 'Courier New, monospace' }}>
            <img src={image} alt="No Project" className="w-1/2 md:w-1/3 h-16 mb-4 object-contain mx-auto "/>
            <h2 className="text-xl text-stone-400 md:text-2xl font-semibold mb-2">No Project Selected</h2>
            <p className="text-sm md:text-base text-stone-600 mb-4">Please select a project to view its details.</p>
            <p>
                <button onClick={onStartAddProject} className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
                    Create New Project
                </button>
            </p>
        </div>
    );
}