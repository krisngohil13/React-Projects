import {useState} from 'react';

export default function ProjectSideBar({onStartProject, projects, onSelectProject, selectedProjectId}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden fixed top-4 right-4 z-50 bg-stone-800 text-stone-200 p-2 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Sidebar */}
      <aside className={`
        bg-stone-900 text-stone-50 
        fixed md:static 
        h-screen 
        w-[80%] sm:w-[20rem] md:w-72 
        p-4 md:p-8 
        overflow-y-auto
        transition-transform duration-300
        rounded-r-xl shadow-lg
        z-40
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <h2 className="mb-8 font-bold uppercase text-lg md:text-xl text-stone-200">
          Your Projects
        </h2>
        
        <button 
          onClick={() => {
            onStartProject();
            setIsOpen(false);
          }}
          className="w-full px-4 py-2 text-xs md:text-sm rounded-md 
            bg-stone-700 text-stone-400 
            hover:bg-stone-600 hover:text-stone-100 
            transition-colors duration-300
            hover:scale-105 transform active:scale-95"
        >
          + Add Project
        </button>

        <ul className="mt-8 space-y-2">
          {projects.map(project => (
            <li key={project.id} className="transform transition-all duration-300 hover:scale-102">
              <button 
                onClick={() => {
                  onSelectProject(project.id);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 rounded-lg
                  text-sm md:text-base
                  transition-all duration-300
                  ${project.id === selectedProjectId 
                    ? 'bg-stone-800 text-stone-200 scale-105' 
                    : 'text-stone-400 hover:bg-stone-800/50'}`}
              >
                {project.title}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Backdrop for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 md:hidden z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}