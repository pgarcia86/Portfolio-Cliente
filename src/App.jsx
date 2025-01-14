import { useContext, useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { projectsContext } from './context/projects.context';
import ProjectCard from './components/Project/ProjectCard';
import ProjectDetail from './components/Project/ProjectDetail';
import NewProject from './components/Project/NewProject';
import Footer from './components/Footer/Footer';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ProjectIdPage from './pages/ProjectIdPage/ProjectIdPage';
import AboutMePage from './pages/AboutMePage/AboutMePage';

function App() {
  const { projects, getProjects } = useContext(projectsContext);
  const [showDetail, setShowDetail] = useState(false);
  const [project, setProject] = useState({});
  const [newProject, setNewProject] = useState(false);
  const [details, setDetails] = useState('app');
  const [somethingChange, setSomethingChange] = useState(false);
  const [isntHome, setIsntHome] = useState(false);
  const navigate = useNavigate();

  const handleClick = (showDetail, project) => {
    setShowDetail(showDetail);
    setProject(project);
    window.scrollTo(0, 0);
    details === 'app' ? setDetails('projectDetail') : setDetails('app');
  };

  const handleNewProject = (newProject) => {
    setNewProject(newProject);
    if (newProject === true && details === 'app') setDetails('projectDetail');
    if (newProject === false && showDetail === false) setDetails('app');
  };

  const handleIsntHome = (isntHome) => {
    setIsntHome(isntHome);
    navigate('/');
  };
  useEffect(() => {
    getProjects();
  }, [somethingChange]);

  return (
    <>
      <Navbar
        handleNewProject={handleNewProject}
        setIsntHome={setIsntHome}
        setShowDetail={setShowDetail}
        setDetails={setDetails}
      />
      {!showDetail && !newProject && !isntHome && (
        <div className='header'>
          <h1>PORTFOLIO PABLO NICOLAS GARCIA BARROS</h1>
          <h5>
            Aquí encontrarás un listado de los proyectos que he realizado durante mis estudios en IT Academy, Barcelona Activa. 
            Utilizando tecnologias Java y Spring Boot Framework he desarrollado API's Rest con persistencia en MySQL y MongoDB.
          </h5>
        </div>
      )}
      {!isntHome && (
        <>
          <div>
            <i className='button__style fa-solid fa-table-list fa-lg'></i>
            <i className='button__style fa-solid fa-table-cells-large fa-lg'></i>
          </div>
          <div className={details}>
            {!showDetail &&
              !newProject &&
              projects.map((project) => (
                <ProjectCard
                  key={project._id}
                  project={project}
                  handleClick={handleClick}
                  showDetail={showDetail}
                />
              ))}
            {showDetail && !newProject && (
              <ProjectDetail
                project={project}
                handleClick={handleClick}
                showDetail={showDetail}
                setSomethingChange={setSomethingChange}
                somethingChange={somethingChange}
              />
            )}
            {newProject && (
              <NewProject
                setSomethingChange={setSomethingChange}
                somethingChange={somethingChange}
                handleNewProject={handleNewProject}
                newProject={newProject}
              />
            )}
          </div>
        </>
      )}
      <Routes>
        <Route
          path={'/:projectId'}
          element={
            <ProjectIdPage
              projects={projects}
              handleIsntHome={handleIsntHome}
              isntHome={isntHome}
              setIsntHome={setIsntHome}
              setSomethingChange={setSomethingChange}
              somethingChange={somethingChange}
            />
          }
        />
        <Route
          path={'/aboutme'}
          element={
            <AboutMePage
              handleIsntHome={handleIsntHome}
              isntHome={isntHome}
              setIsntHome={setIsntHome}
            />
          }
        />
        <Route
          path={'/'}
          element={
            <Footer
              handleNewProject={handleNewProject}
              newProject={newProject}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
