const movieSchema = `type Movie {
    id: ID!
    poster: Int!
    title: String!
    directors: [String!]!
    producers: [String!]!
    genres: [String!]!
    releaseYear: Int!
    description: String!
    averageRating: Float
    imageThumbnail: String
    image: String
    createdAt: String
    updatedAt: String
    deletedAt: String
    ratings: [Rating!]
  }`;
export default movieSchema;
