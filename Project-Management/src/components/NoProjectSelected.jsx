import image from '../assets/no-projects.png'

export default function NoProjectSelected({onStartProject}){
    return(
        <div className="mt-24 text-center">
            <img 
                src={image} 
                alt="No Project" 
                className="w-16 h-16 object-contain mx-auto mb-8 animate-bounce"
            />
            <h2 className="text-xl font-bold text-stone-500 mb-4">
                No Project Selected
            </h2>
            <p className="text-stone-400 mb-8">
                Select a project or get started with a new one
            </p>
            <button 
                onClick={onStartProject} 
                className="px-6 py-2 rounded-md
                    bg-stone-700 text-stone-400 
                    hover:bg-stone-600 hover:text-stone-100 
                    transition-all duration-300"
            >
                Create New Project
            </button>
        </div>
    );
}