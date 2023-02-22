const express = require('express')
const {ApolloServer, gql} = require('apollo-server-express')

const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')
const mongoose = require('mongoose')




async function startServer() {
    const app = express();
    const apolloServer = new ApolloServer({
         typeDefs,
         resolvers,
    });

    await apolloServer.start();

    apolloServer.applyMiddleware({app:app});

    // if we change path name alternative of graphql we can use in the middleware added "path '/users'"

    // apolloServer.applyMiddleware({app:app, path:'/users'});

    app.use((req, res) => {
        res.send("Hello from express apollo server")
    });

    await mongoose.connect('mongodb://localhost:27017/post_db',{
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })

    app.listen(4000, ()=> console.log("Server in running on port 4000"))
}
startServer();