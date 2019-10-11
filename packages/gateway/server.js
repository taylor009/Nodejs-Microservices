'use strict';
const app = require('express')();
const {ApolloServer} = require('apollo-server-express');
const bodyParser = require('body-parser');
const {makeExecutableSchema} = require('graphql-tools');

const {port} = require('./config');

const typeDefs = `
    type Query {hey: String!}
`;

const resolvers =
    {
        Query: {
            hey: () => 'hey there'
        }
    };

const schema = makeExecutableSchema(
    {
        typeDefs,
        resolvers
    });

app.use(bodyParser.json());
const server = new ApolloServer({schema});
server.applyMiddleware({app,path:'/gq'});

app.listen(port, () => console.log(`Listening on port ${port}`));
