import express from 'express';
import {
    ApolloServer
} from 'apollo-server-express';
import {
    graphql
} from 'graphql';

// import schema from '../graphql/schema';
const typeDefs = require('../graphql/typeDefs').default
const app = express();


const PORT = process.env.PORT || 3000;

const apolloserver = new ApolloServer({
    typeDefs,
    resolvers: {}
})

apolloserver.applyMiddleware({
    app,

    // This path is the endpoint for your graphql server
    //so it is added to the app port  + /path
    path: "/graphql"
})

app.all('*', (req, res) => {
    res.status(404).json({
        status: "please provide an endpoint"
    })
})

app.listen(PORT, "0.0.0.0", () => {
    console.log(`listening on port ${PORT}`)
});