import axios from "axios";

export default class ProjectsService {
  constructor () {
    this.API_URL = 'http://localhost:5005/api'
  }
  getProjects () {
    return axios.get(`${this.API_URL}/projects`)
  }
  addProject (project) {
    return axios.post(`${this.API_URL}/projects/new`, project)
  }
  editProject (projId, project) {
    return axios.put(`${this.API_URL}/projects/${projId}/edit`, project)
  }
  deleteProject (projId, ownCode) {
    return axios.delete(`${this.API_URL}/projects/${projId}/delete`, ownCode)
  }
}