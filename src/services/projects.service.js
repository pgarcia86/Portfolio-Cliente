import axios from 'axios';

export default class ProjectsService {
	constructor() {
		this.API_URL = import.meta.env.VITE_API_URL;
	}

	getProjects() {
		return axios.get(`${this.API_URL}`);
	}

	getOneProject(projId) {
		return axios.get(`${this.API_URL}/${projId}`);
	}

	addProject(project) {
		return axios.post(`${this.API_URL}/new`, project);
	}

	editProject(projId, project) {
		return axios.put(`${this.API_URL}/${projId}/edit`, project);
	}

	deleteProject(projId, ownCode) {
		return axios.delete(`${this.API_URL}/${projId}/delete`, {
			data: ownCode,
		});
	}

	uploadFile(file) {
		return axios.post(`${this.API_URL}/upload`, file);
	}
}
