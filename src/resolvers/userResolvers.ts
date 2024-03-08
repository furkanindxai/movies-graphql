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
        },
        updateUser(_, args, { dataSources }) {
            const { email } = args
            return dataSources.moviesAPI.updateUser(email) 
        },
        updatePassword(_, args, { dataSources }) {
            const {password, newPassword, confirmPassword} = args
            return dataSources.moviesAPI.updatePassword(password, newPassword, confirmPassword)
        },

    }
}

export default userResolvers

