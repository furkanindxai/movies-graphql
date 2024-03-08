const ratingResolvers = {
    queries: {
        ratings(_, args, { dataSources }) {
            const { params } = args;
            return dataSources.moviesAPI.getRatings(params);
        },
        rating(_, args, { dataSources }) {
            const { id } = args;
            return dataSources.moviesAPI.getRating(id);
        }
    },
    mutations: {
        deleteRating(_, args, { dataSources }) {
            const { id } = args;
            return dataSources.moviesAPI.deleteRating(id);
        },
        restoreRating(_, args, { dataSources }) {
            const { id } = args;
            return dataSources.moviesAPI.restoreRating(id);
        },
    }
};
export default ratingResolvers;
