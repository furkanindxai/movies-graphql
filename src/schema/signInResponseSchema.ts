const signInResponseSchema = `type SignInSuccess {
    token: String
    email: String
    roles: String
    id: ID
}

type SignInFail {
    message: String
}

union SignInResponse = SignInSuccess | SignInFail
`

export default signInResponseSchema