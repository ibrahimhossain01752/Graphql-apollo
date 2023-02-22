const {gql} = require('apollo-server-express')

// Construct a schema, using GraphQL schema language


const typeDefs = gql`
  type Post {
    id: ID
    title: String
    description: String
  }

  type Query {
    hello: String

    getAllPosts: [Post]
    getPost(id: ID):Post
  }

  input PostInput {
    title: String
    description: String

  }


  type Mutation {
    createPost(post: PostInput): Post
  }

`;

module.exports = typeDefs;