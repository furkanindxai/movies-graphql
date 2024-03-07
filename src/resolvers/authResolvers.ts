import 'dotenv/config'

const authResolvers = {
    queries: {
        signIn(_, args, { dataSources }) {
            const {email, password} = args.creds
            return dataSources.moviesAPI.signIn(email, password)
        },
    },
    mutations: {
        signUp(_, args, {dataSources}) {
                const {email, password} = args.creds
                return dataSources.moviesAPI.signUp(email, password)
        }
    }
   

}

export default authResolvers

