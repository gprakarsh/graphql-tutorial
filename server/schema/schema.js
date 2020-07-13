const graphql = require('graphql');
const _ = require('lodash');
 
const {GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql;

//dummy data

let books = [
    {name: 'book1', genre:'Fantasy', id:'1'},
    {name: 'book2', genre:'Sci-Fi', id:'2'},
    {name: 'book3', genre:'Thriller', id:'3'}
];

const BookType = new GraphQLObjectType({
    name:'Book',
    fields:()=>({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        genre: {type: GraphQLString}         
    })
});

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        book: {
            type: BookType,
            args: {id:{type: GraphQLString}},
            resolve(parent,args){
                //code to get data from db / other source
                return _.find(books, {id:args.id});
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
});

//schema - should define types of data, relation between data ,and the root queries 