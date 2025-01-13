import {useState} from 'react';

export default function ProjectSideBar({onStartAddProject, projects, onSelectProject, selectedProjectId}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl" style={{ fontFamily: 'Courier New, monospace' }}>
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
      <div>
        <button onClick={onStartAddProject} className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
          Add Project
        </button>
      </div>
      <ul className="mt-8">
        {projects.map(project => {
          let cssClasses = "w-full text-left px-4 py-2 rounded-lg my-1 hover:text-stone-200 hover:bg-stone-800";
          
          if (project.id === selectedProjectId) {
            cssClasses += " bg-stone-800 text-stone-200"
          } else {
            cssClasses += " text-stone-400"
          }

          return (
            <li key={project.id}>
              <button 
                className={cssClasses}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}