const ratingSchema = `type Rating {
    id: ID!
    userId: Int!
    movieId: Int!
    rating: Int!
    review: String!
  }`

export default ratingSchema