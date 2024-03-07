import 'dotenv/config';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema/index.js';
import { resolvers } from "./resolvers/index.js";
import MoviesAPI from './datasources/api.js';
const server = new ApolloServer({
    typeDefs,
    resolvers
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 4002 },
    context: async ({ req, res }) => {
        const { cache } = server;
        const token = req.headers.authorization || '';
        return {
            dataSources: {
                moviesAPI: new MoviesAPI({ cache, token }),
            }
        };
    },
});
console.log(`Server ready at: ${url}`);
