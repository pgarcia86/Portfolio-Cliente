import { createContext, useEffect, useState } from "react";
import ProjectsService from "../services/projects.service";

const projectsContext = createContext();

function ProjectsProviderWrapper({ children }) {
  const [projects, setProjects] = useState([]);

  const projectsService = new ProjectsService();

  const getProjects = () => {
    projectsService
      .getProjects()
      .then((result) => {
        setProjects(result.data.response.reverse());
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <projectsContext.Provider value={{ projects, getProjects }}>
      {children}
    </projectsContext.Provider>
  );
}

export { projectsContext, ProjectsProviderWrapper };
