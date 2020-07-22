const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//allow cross-origin requests
app.use(cors());

mongoose.connect('mongodb+srv://test123:test123@cluster0.tehk1.mongodb.net/gql-ninja?retryWrites=true&w=majority', {useNewUrlParser:true, useUnifiedTopology:true})
mongoose.connection.once('open', ()=>{
    console.log('We have made contact with mongoDB')
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(6464, ()=>{
    console.log('Magic at 6464')
});

