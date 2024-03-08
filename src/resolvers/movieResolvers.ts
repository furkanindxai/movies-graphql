const movieResolvers = {
    queries: {
        movies(_, args, { dataSources }) {
            const {params} = args
            return dataSources.moviesAPI.getMovies(params)
        },
        movie(_, args, { dataSources }) {
            const { id } = args
            return dataSources.moviesAPI.getMovie(id)
        },
        userMovies(_, args, { dataSources}) {
            const { type } = args
            return dataSources.moviesAPI.getUserMovies(type)
        },
    },
    mutations: {
        addMovie(_, args, { dataSources }) {
            const { movie } = args
            return dataSources.moviesAPI.addMovie(movie)
        },
        deleteMovie(_, args, { dataSources }) {
            const { id } = args
            return dataSources.moviesAPI.deleteMovie(id)
        },
        restoreMovie(_, args, { dataSources }) {
            const { id } = args
            return dataSources.moviesAPI.restoreMovie(id)
        },
        addPoster(_, args, { dataSources }) {
            const { id, image, imageThumbnail } = args
            return dataSources.moviesAPI.addPoster(id, image, imageThumbnail)
        },
        rateMovie(_, args, { dataSources }) {
            const { rating, review, id } = args
            return dataSources.moviesAPI.rateMovie(id, rating, review)
        },
        updateMovie(_, args, { dataSources }) {
            const { id, description } = args
            return dataSources.moviesAPI.updateMovie(id, description)
        }
    },
    Movie: {
        ratings(parent, args, { dataSources }) {
            const { id } = parent
            return dataSources.moviesAPI.getMovieRatings(id)
        }
    }
}

export default movieResolvers

