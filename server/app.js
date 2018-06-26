const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

// connect to mlab database
mongoose.connect('mongodb://gabriel:itat19porra@ds261660.mlab.com:61660/graphql');
mongoose.connection.once('open', () => {
  console.log('connected to database');
});


const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('now listening for requests on port 4000');
});
