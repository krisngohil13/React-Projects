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

  function handleNewProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState(prevState => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleSelectProject(id) {
    setProjectState(prevState => ({
      ...prevState,
      selectedProjectId: id,
    }));
  }

  function handleDeleteProject(id) {
    setProjectState(prevState => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter(project => project.id !== id),
    }));
  }

  function handleEditProject(editedProject) {
    setProjectState(prevState => ({
      ...prevState,
      projects: prevState.projects.map(project => 
        project.id === editedProject.id ? editedProject : project
      ),
    }));
  }

  const selectedProject = projectState.projects.find(
    project => project.id === projectState.selectedProjectId
  );

  let content;

  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleNewProject} />;
  } else {
    content = (
      <ProjectDetails 
        project={selectedProject} 
        onEdit={handleEditProject}
        onDelete={handleDeleteProject}
      />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar 
        onStartAddProject={handleNewProject} 
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
