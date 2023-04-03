import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import ProjectDetail from '../components/Project/ProjectDetail';
import { projectsContext } from '../context/projects.context';

export default function () {
	const { projectId } = useParams();
    const { projects, getProjects } = useContext(projectsContext)
    const [project, setproject] = useState({})

    useEffect(()=> {
        getProjects();
        projects.find(project => {
            if(project._id === projectId) setproject(project)
        })
    }, [])

	return (
		<>
           
			<ProjectDetail
				project={project}
			/>
		</>
	);
}
