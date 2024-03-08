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

  updateUser(email: string) {
    return this.put(`${this.baseURL}users/me`, { body:  {email}})
  }

  updatePassword(password: string, newPassword: string, confirmPassword: string) {
    return this.patch(`${this.baseURL}users/me/password`, { body:  {password, newPassword, confirmPassword}})
  }

  getUserMovies(type: string) {
    return this.get(`${this.baseURL}users/me/movies/`, {
      params: {
        type
      }
    })
  }

  deleteMovie(id: bigint) {
    return this.delete(`${this.baseURL}movies/${id}`)
  }

  restoreMovie(id: bigint) {
    return this.patch(`${this.baseURL}movies/restore/${id}`) 
  }

  addPoster(id: bigint, image: string, imageThumbnail: string) {
    return this.patch(`${this.baseURL}movies/${id}`, { body: {image, imageThumbnail}})
  }

  rateMovie(id, rating, review) {
    return this.post(`${this.baseURL}movies/${id}/ratings`, { body: {rating, review} })
  }

  updateMovie(id, description) {
    return this.put(`${this.baseURL}movies/${id}`, { body: {description} })
  }

  getMovieRatings(id) {
    return this.get(`${this.baseURL}movies/${id}/ratings`)
  }

  getRatings(params) {
    return this.get(`${this.baseURL}ratings/`, { params })
  }

  getRating(id) {
    return this.get(`${this.baseURL}ratings/${id}`)
  }

  deleteRating(id: bigint) {
    return this.delete(`${this.baseURL}ratings/${id}`)
  }

  restoreRating(id: bigint) {
    return this.patch(`${this.baseURL}ratings/restore/${id}`) 
  }
}

export default MoviesAPI