import axios from 'axios';

export default class ProjectsService {
	constructor() {
		this.API_URL = process.env.REACT_APP_API_URL;
	}

	getProjects() {
		return axios.get(`https://portfolio-eogimenez.fly.dev/api/projects`);
	}

	getOneProject(projId) {
		return axios.get(`https://portfolio-eogimenez.fly.dev/api/projects/${projId}`);
	}

	addProject(project) {
		return axios.post(`https://portfolio-eogimenez.fly.dev/api/projects/new`, project);
	}

	editProject(projId, project) {
		return axios.put(`https://portfolio-eogimenez.fly.dev/api/projects/${projId}/edit`, project);
	}

	deleteProject(projId, ownCode) {
		return axios.delete(`https://portfolio-eogimenez.fly.dev/api/projects/${projId}/delete`, {
			data: ownCode,
		});
	}

	uploadFile(file) {
		return axios.post(`https://portfolio-eogimenez.fly.dev/api/projects/upload`, file);
	}
}
