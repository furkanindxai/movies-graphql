const movieResolvers = {
    queries: {
        movies(_, args, { dataSources }) {
            const {params} = args
            return dataSources.moviesAPI.getMovies(params)
        },
        movie(_, args, { dataSources }) {
            const { id } = args
            return dataSources.moviesAPI.getMovie(id)
        }
    },
    mutations: {
        addMovie(_, args, { dataSources }) {
            const { movie } = args
            return dataSources.moviesAPI.addMovie(movie)
        }
    }
}

export default movieResolvers

