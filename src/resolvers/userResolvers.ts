const userResolvers = {
    queries: {
        users(_, args, { dataSources }) {
            const {params} = args
            return dataSources.moviesAPI.getUsers(params)
        },
        user(_, args, { dataSources }) {
            const {id} = args
            return dataSources.moviesAPI.getUser(id)
        }
    },
    mutations: {
        deleteUser(_, args, { dataSources }) {
            return dataSources.moviesAPI.deleteUser()
        },
        deleteUserByAdmin(_, args, { dataSources }) {
            const {id} = args
            return dataSources.moviesAPI.deleteUserByAdmin(id)
        },
        restoreUser(_, args, { dataSources }) {
            const {id} = args
            return dataSources.moviesAPI.restoreUser(id)
        }
    }
}

export default userResolvers

