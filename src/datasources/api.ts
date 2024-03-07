import 'dotenv/config'

import { RESTDataSource } from '@apollo/datasource-rest';

import Movie from "../interfaces/movieInterface"

class MoviesAPI extends RESTDataSource {
  override baseURL = process.env.BASE_URL
  private token: string;

  constructor(options: { token; cache }) {
    super(options);
    this.token = options.token;
  }

  override willSendRequest(_path, request) {
    request.headers['authorization'] = this.token;
  }
  
  signIn(email: string, password: string) {
    return this.post(`${this.baseURL}auth/signin`, { body: {email, password} });
  }

  signUp(email: string, password: string) {
    return this.post(`${this.baseURL}auth/signup`, { body: {email, password} });
    
  }

  getMovies(params) {
    return this.get(`${this.baseURL}movies/`, {
      params
    });
  }

  getMovie(id: bigint) {
    return this.get(`${this.baseURL}movies/${id}`)
  }

  addMovie(movie: Movie) {
    return this.post(`${this.baseURL}movies/`, { body: movie });
  }

  getUsers(params) {
    return this.get(`${this.baseURL}users/`, { params })
  }
  
  getUser(id: bigint) {
    return this.get(`${this.baseURL}users/${id}`)
  }

  deleteUser() {
    return this.delete(`${this.baseURL}users/me`)
  }

  deleteUserByAdmin(id: bigint) {
    return this.delete(`${this.baseURL}users/${id}`)
  }

  restoreUser(id: bigint) {
    return this.patch(`${this.baseURL}users/restore/${id}`)
  }
}

export default MoviesAPI