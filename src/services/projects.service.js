import axios from 'axios';

export default class ProjectsService {
	constructor() {
		this.API_URL = process.env.API_URL;
	}

	getProjects() {
		return axios.get(`${this.API_URL}/projects`);
	}

	getOneProject(projId) {
		return axios.get(`${this.API_URL}/projects/${projId}`);
	}

	addProject(project) {
		return axios.post(`${this.API_URL}/projects/new`, project);
	}

	editProject(projId, project) {
		return axios.put(`${this.API_URL}/projects/${projId}/edit`, project);
	}

	deleteProject(projId, ownCode) {
		return axios.delete(`${this.API_URL}/projects/${projId}/delete`, {
			data: ownCode,
		});
	}

	uploadFile(file) {
		return axios.post(`${this.API_URL}/projects/upload`, file);
	}
}
