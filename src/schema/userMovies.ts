const userMovieSchema = `type RatedMovie {
    id: Int
    userId: Int
    rating: Int
    review: String
    createdAt: String
    updatedAt: String
    deletedAt: String
    Movie: Movie
}

union UserMovie = Movie | RatedMovie
`

export default userMovieSchema