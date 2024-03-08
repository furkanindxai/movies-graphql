import signInInput from "./signInInput.js"
import signUpInput from "./signUpInput.js"
import signInResponseSchema from "./signInResponseSchema.js"
import userSchema from "./userSchema.js"
import movieSchema from "./movieSchema.js"
import ratingSchema from "./ratingSchema.js"
import messageResponseSchema from "./messageResponseSchema.js"
import movieInput from "./movieInput.js"
import movieParamsInput from "./moviesParamsInput.js"
import usersParamsInput from "./usersParamsInput.js"
import userMovieSchema from "./userMovies.js"
import ratingsParamsInput from "./ratingsParamsInput.js"

export const typeDefs = `#graphql
  ${signInResponseSchema}
  ${messageResponseSchema}
  ${signInInput}
  ${signUpInput}
  ${userSchema}
  ${ratingSchema}
  ${movieSchema}
  ${movieInput}
  ${movieParamsInput}
  ${usersParamsInput}
  ${userMovieSchema}
  ${ratingsParamsInput}
  type Query {
    users(params: UsersParamsInput): [User]
    user(id: ID!): User
    movies(params: MoviesParamsInput): [Movie]
    movie(id: ID!): Movie
    signIn(creds: SignInInput!): SignInResponse!
    userMovies(type: String): [UserMovie!]
    ratings(params: RatingsParamsInput): [Rating!]
    rating(id: ID!): Rating
  }
  type Mutation {
    signUp(creds: SignUpInput!): MessageResponse!
    addMovie(movie: MovieInput!): MessageResponse!
    deleteUser: String
    deleteUserByAdmin(id: ID!): String
    restoreUser(id: ID!): String
    updateUser(email: String!): String
    updatePassword(password: String!, newPassword: String!, confirmPassword: String!): String
    deleteMovie(id: ID!): String
    restoreMovie(id: ID!): String
    addPoster(id: ID!, image: String, imageThumbnail: String): String
    rateMovie(id: ID!, rating: Int!, review: String!): String
    updateMovie(id: ID!, description: String!): String
    deleteRating(id: ID!): String
    restoreRating(id: ID!): String
  }
`