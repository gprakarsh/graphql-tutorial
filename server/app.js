const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', graphqlHTTP({
    schema
}))

app.listen(6464, ()=>{
    console.log('Magic at 6464')
});

