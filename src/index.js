
const {ApolloServer} = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./schemas/taskSchema');
const resolvers = require('./resolvers/taskResolver');


const startServer = async () => {
    await mongoose.connect('mongodb+srv://AARONCM:VANDREAD@task.edees.mongodb.net/?retryWrites=true&w=majority&appName=TASK');
    const server = new 
    ApolloServer({ typeDefs, resolvers });

    server.listen().then(({url}) => {
        console.log(`Servidor corriendo en ${url}`);
    });
};

startServer();