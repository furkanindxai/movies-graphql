const movieSchema = `type Movie {
    id: ID!
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
  }`

export default movieSchema