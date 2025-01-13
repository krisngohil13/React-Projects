import {useState} from 'react';

export default function ProjectSideBar({onStartAddProject,projects}) {

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
      <div>
        <button onClick={onStartAddProject} className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
          + Add Project
        </button>
      </div>
      <ul className="mt-4">
        {projects.map(project => (
          <li key={project.id} className="mb-4 p-2 text-stone-800 text-center uppercase bg-stone-300 rounded-lg shadow hover:bg-stone-400 transition duration-300">
          <h3 className="font-bold text-sm ">{project.title}</h3>
        </li>
        ))}
      </ul>
    </aside>
  );
}