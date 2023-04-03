import { useContext, useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { projectsContext } from './context/projects.context';
import ProjectsService from './services/projects.service';
import ProjectCard from './components/Project/ProjectCard';
import ProjectDetail from './components/Project/ProjectDetail';
import NewProject from './components/Project/NewProject';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import ProjectIdPage from './pages/ProjectIdPage';

function App() {
	const { projects, getProjects } = useContext(projectsContext);
	const [showDetail, setShowDetail] = useState(false);
	const [project, setProject] = useState({});
	const [newProject, setNewProject] = useState(false);
	const [details, setDetails] = useState('app');
	const [somethingChange, SetSomethingChange] = useState(false);

	const handleClick = (showDetail, project) => {
		setShowDetail(showDetail);
		setProject(project);
		details === 'app' ? setDetails('projectDetail') : setDetails('app');
	};

	const handleNewProject = (newProject) => {
		setNewProject(newProject);
		if (newProject === true && details === 'app') setDetails('projectDetail');
		if (newProject === false && showDetail === false) setDetails('app');
	};

	useEffect(() => {
		getProjects();
	}, [somethingChange]);

	return (
		<>
			<Navbar handleNewProject={handleNewProject} newProject={newProject} />
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
						SetSomethingChange={SetSomethingChange}
						somethingChange={somethingChange}
					/>
				)}
				{newProject && (
					<NewProject
						SetSomethingChange={SetSomethingChange}
						somethingChange={somethingChange}
						handleNewProject={handleNewProject}
						newProject={newProject}
					/>
				)}
			</div>
			<Routes>
				<Route path={'/projects/:projectId'} element={<ProjectIdPage/>} />
				<Route path={'/projects'} element={<Footer />}/>
			</Routes>
			
		</>
	);
}

export default App;
