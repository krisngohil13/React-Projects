import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSideBar from "./components/ProjectSideBar";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartProject() {
    setProjectState(prev => ({
      ...prev,
      selectedProjectId: null,
    }));
  }

  function handleAddProject(projectData) {
    const newProject = {
      ...projectData,
      id: Math.random()
    };

    setProjectState(prev => ({
      ...prev,
      selectedProjectId: undefined,
      projects: [...prev.projects, newProject],
    }));
  }

  function handleSelectProject(id) {
    setProjectState(prev => ({
      ...prev,
      selectedProjectId: id,
    }));
  }

  function handleDeleteProject(id) {
    setProjectState(prev => ({
      ...prev,
      selectedProjectId: undefined,
      projects: prev.projects.filter(project => project.id !== id),
    }));
  }

  function handleEditProject(editedProject) {
    setProjectState(prev => ({
      ...prev,
      projects: prev.projects.map(project => 
        project.id === editedProject.id ? editedProject : project
      ),
    }));
  }

  const selectedProject = projectState.projects.find(
    project => project.id === projectState.selectedProjectId
  );

  let content;

  if (projectState.selectedProjectId === null) {
    content = (
        <NewProject 
            onAdd={handleAddProject} 
            onCancel={() => setProjectState(prev => ({
                ...prev,
                selectedProjectId: undefined
            }))}
        />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartProject={handleStartProject} />;
  } else {
    content = (
      <ProjectDetails 
        project={selectedProject} 
        onDelete={handleDeleteProject}
        onEdit={handleEditProject}
      />
    );
  }

  return (
    <main className="h-screen flex flex-col md:flex-row bg-stone-50">
      <ProjectSideBar 
        onStartProject={handleStartProject} 
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectState.selectedProjectId}
      />
      <div className="flex-1 p-4 md:p-8 h-screen overflow-y-auto">
        {content}
      </div>
    </main>
  );
}

export default App;
