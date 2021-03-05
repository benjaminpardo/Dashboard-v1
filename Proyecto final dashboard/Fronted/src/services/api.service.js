import axios from 'axios';
import { request, response } from './api.interceptor';

class ApiService {
  constructor (route) {
    this.resource = axios.create({
      baseURL: 'http://localhost:3000/api/'
    //   baseURL: 'https://node-basic-example.vercel.app/'
    })
    this.resource.interceptors.request.use(request)
    this.resource.interceptors.response.use(res => { return res }, response)
    this.route = route
  }
  all () {
    return this.resource.get(this.route)
  }
  getById (id) {
    return this.resource.get(`${this.route}/${id}`)
  }
  save (model) {
    return this.resource.post(this.route, model)
  }
  update (id, model) {
    return this.resource.put(`${this.route}/${id}`, model)
  }
  delete (id) {
    return this.resource.delete(`${this.route}/${id}`)
  }
}

export default ApiService