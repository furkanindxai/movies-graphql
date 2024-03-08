const ratingSchema = `type Rating {
    id: ID!
    userId: Int!
    movieId: Int!
    rating: Int!
    review: String!
    createdAt: String
    updatedAt: String
    deletedAt: String
  }`;
export default ratingSchema;
