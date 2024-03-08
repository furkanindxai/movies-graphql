import movieResolvers from "./movieResolvers.js"
import authResolvers from "./authResolvers.js"
import userResolvers from "./userResolvers.js";
import ratingResolvers from "./ratingResolvers.js";

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
    UserMovie: {
      __resolveType(obj, contextValue, info){
        if(obj.Movie){
          return 'RatedMovie';
        }
        else {
          return 'Movie';
        }
      },
   }
    ,
    Query: {
        ...movieResolvers.queries,
        ...authResolvers.queries,
        ...userResolvers.queries,
        ...ratingResolvers.queries
    },
    Mutation: {
        ...authResolvers.mutations,
        ...movieResolvers.mutations,
        ...userResolvers.mutations,
        ...ratingResolvers.mutations
    },
    Movie: movieResolvers.Movie
  }
   
