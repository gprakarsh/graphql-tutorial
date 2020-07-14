const graphql = require('graphql');
const _ = require('lodash');
 
const {
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLSchema,
    GraphQLID, //stores the number you enter as a string
    GraphQLInt
} = graphql;

//dummy data

let books = [
    {name: 'book1', genre:'Fantasy', id:'1', authorId:'1'},
    {name: 'book2', genre:'Sci-Fi', id:'2', authorId:'2'},
    {name: 'book3', genre:'Thriller', id:'3', authorId:'3'},
    {name: 'book4', genre:'Thriller', id:'4', authorId:'3'},
    {name: 'book5', genre:'Thriller', id:'5', authorId:'3'},
];

let authors = [
    {name: 'author1', age:44, id:'1'},
    {name: 'author2', age:45, id:'2'},
    {name: 'author3', age:46, id:'3'} 
]

const BookType = new GraphQLObjectType({
    name:'Book',
    fields:()=>({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
        author: {
            type:AuthorType,
            resolve(parent,args){ 
                return _.find(authors,{id:parent.authorId});
            }
        }         
    })
});

const AuthorType = new GraphQLObjectType({
    name:'Author',
    fields:()=>({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt}         
    })
})

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        book: {
            type: BookType,
            args: {id:{type: GraphQLID}},
            resolve(parent,args){
                //code to get data from db / other source
                return _.find(books, {id:args.id});
            }
        },
        author: {
            type: AuthorType,
            args: {id:{type: GraphQLID}},
            resolve(parent,args){
                return _.find(authors, {id:args.id})
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
});

//schema - should define types of data, relation between data ,and the root queries 