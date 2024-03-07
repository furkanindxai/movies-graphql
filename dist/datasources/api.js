import 'dotenv/config';
import { RESTDataSource } from '@apollo/datasource-rest';
class MoviesAPI extends RESTDataSource {
    constructor(options) {
        super(options);
        this.baseURL = process.env.BASE_URL;
        this.token = options.token;
    }
    willSendRequest(_path, request) {
        request.headers['authorization'] = this.token;
    }
    signIn(email, password) {
        return this.post(`${this.baseURL}auth/signin`, { body: { email, password } });
    }
    signUp(email, password) {
        return this.post(`${this.baseURL}auth/signup`, { body: { email, password } });
    }
    getMovies(params) {
        return this.get(`${this.baseURL}movies/`, {
            params
        });
    }
    getMovie(id) {
        return this.get(`${this.baseURL}movies/${id}`);
    }
    addMovie(movie) {
        return this.post(`${this.baseURL}movies/`, { body: movie });
    }
    getUsers(params) {
        return this.get(`${this.baseURL}users/`, { params });
    }
    getUser(id) {
        return this.get(`${this.baseURL}users/${id}`);
    }
    deleteUser() {
        return this.delete(`${this.baseURL}users/me`);
    }
    deleteUserByAdmin(id) {
        return this.delete(`${this.baseURL}users/${id}`);
    }
    restoreUser(id) {
        return this.patch(`${this.baseURL}users/restore/${id}`);
    }
}
export default MoviesAPI;
