require('dotenv').config();

import {ApolloServer} from "apollo-server";
import {gql} from 'apollo-server'

const server = new ApolloServer({
    typeDefs : gql``
});

server.listen().then(() => console.log('graphql server running'));