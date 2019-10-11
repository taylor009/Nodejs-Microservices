'use strict';
const app = require('express')();
const {ApolloServer} = require('apollo-server-express');
const bodyParser = require('body-parser');
const {port} = require('./config');
const schema = require('./data/schema');

app.use(bodyParser.json());
const server = new ApolloServer({schema});
server.applyMiddleware({app,path:'/gq'});

app.listen(port, () => console.log(`Listening on port ${port}`));
