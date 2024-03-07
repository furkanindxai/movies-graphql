import movieResolvers from "./movieResolvers.js"
import authResolvers from "./authResolvers.js"
import userResolvers from "./userResolvers.js";

export const resolvers = {
    SignInResponse: {
        __resolveType(obj, contextValue, info){
          if(obj.email){
            return 'SignInSuccess';
          }
          if(obj.message){
            return 'SignInFail';
          }
          return null;
        },
    },
    Query: {
        ...movieResolvers.queries,
        ...authResolvers.queries,
        ...userResolvers.queries
    },
    Mutation: {
        ...authResolvers.mutations,
        ...movieResolvers.mutations,
        ...userResolvers.mutations
    }
  }
   
