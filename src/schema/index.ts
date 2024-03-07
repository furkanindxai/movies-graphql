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

export const typeDefs = `#graphql
  ${signInResponseSchema}
  ${messageResponseSchema}
  ${signInInput}
  ${signUpInput}
  ${userSchema}
  ${movieSchema}
  ${ratingSchema}
  ${movieInput}
  ${movieParamsInput}
  ${usersParamsInput}
  type Query {
    users(params: UsersParamsInput): [User]
    user(id: ID!): User
    movies(params: MoviesParamsInput): [Movie]
    movie(id: ID!): Movie
    ratings: [Rating]
    rating(id: ID!): Rating
    signIn(creds: SignInInput!): SignInResponse!
  }
  type Mutation {
    signUp(creds: SignUpInput!): MessageResponse!
    addMovie(movie: MovieInput!): MessageResponse!
    deleteUser: String
    deleteUserByAdmin(id: ID!): String
    restoreUser(id: ID!): String
  }
`