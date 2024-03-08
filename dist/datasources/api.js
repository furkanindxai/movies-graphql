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
    updateUser(email) {
        return this.put(`${this.baseURL}users/me`, { body: { email } });
    }
    updatePassword(password, newPassword, confirmPassword) {
        return this.patch(`${this.baseURL}users/me/password`, { body: { password, newPassword, confirmPassword } });
    }
    getUserMovies(type) {
        return this.get(`${this.baseURL}users/me/movies/`, {
            params: {
                type
            }
        });
    }
    deleteMovie(id) {
        return this.delete(`${this.baseURL}movies/${id}`);
    }
    restoreMovie(id) {
        return this.patch(`${this.baseURL}movies/restore/${id}`);
    }
    addPoster(id, image, imageThumbnail) {
        return this.patch(`${this.baseURL}movies/${id}`, { body: { image, imageThumbnail } });
    }
    rateMovie(id, rating, review) {
        return this.post(`${this.baseURL}movies/${id}/ratings`, { body: { rating, review } });
    }
    updateMovie(id, description) {
        return this.put(`${this.baseURL}movies/${id}`, { body: { description } });
    }
    getMovieRatings(id) {
        return this.get(`${this.baseURL}movies/${id}/ratings`);
    }
    getRatings(params) {
        return this.get(`${this.baseURL}ratings/`, { params });
    }
    getRating(id) {
        return this.get(`${this.baseURL}ratings/${id}`);
    }
    deleteRating(id) {
        return this.delete(`${this.baseURL}ratings/${id}`);
    }
    restoreRating(id) {
        return this.patch(`${this.baseURL}ratings/restore/${id}`);
    }
}
export default MoviesAPI;
