import { useContext, useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { projectsContext } from './context/projects.context';
import ProjectsService from './services/projects.service';
import ProjectCard from './components/Project/ProjectCard';
import ProjectDetail from './components/Project/ProjectDetail';
import NewProject from './components/Project/NewProject';

function App() {
	const { projects, getProjects } = useContext(projectsContext);
	const [showDetail, setShowDetail] = useState(false);
	const [project, setProject] = useState('');
	const [newProject, setNewProject] = useState(false);
	const [details, setDetails] = useState('app');
	const projectService = new ProjectsService();

	const handleClick = (showDetail, project) => {
		setShowDetail(showDetail);
		setProject(project);
		details === 'app' ? setDetails('projectDetail') : setDetails('app');
	};

	const handleNewProject = (newProject) => {
		setNewProject(newProject);
	};

	useEffect(() => {
		getProjects();
	}, []);

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
					<ProjectDetail project={project} handleClick={handleClick} showDetail={showDetail} />
				)}
				{newProject && <NewProject />}
			</div>
		</>
	);
}

export default App;
