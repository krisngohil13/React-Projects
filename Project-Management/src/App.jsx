import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSideBar from "./components/ProjectSideBar";

function App() {
  const [projectState,showProjectState] = useState({
    selectedProjectID: undefined,
    projects: []
  })

  function handleNewProject(){
    showProjectState(prevState => {
      return{
        ...prevState,
        selectedProjectID: null,
      };
    })
  }
    function handleAddProject(projectData) {
      showProjectState(prevState => {
        const projectId = Math.random();
        const newProject = {
          ...projectData,
          id:projectId,
        }
        return {
          ...prevState,
        selectedProjectID: undefined,
          projects: [...prevState.projects, newProject],
        };
      });
    }
    console.log(projectState);

  let content;

  if(projectState.selectedProjectID === null){
   content =  <NewProject onAdd={handleAddProject}/>;
  }
  else if(projectState.selectedProjectID === undefined){
    content = <NoProjectSelected onStartAddProject={handleNewProject}/>;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar onStartAddProject={handleNewProject} projects={projectState.projects}/>
      {content}
    </main>
  );
}

export default App;
