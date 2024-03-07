const authSchema = `type Auth {
    input SignInInput {
        email: String!,
        password: String!
    }
    input SignUpInput {
        email: String!,
        password: String!
    }
    SignUpResponse {
        message: String!
    }
}`;
export default authSchema;
