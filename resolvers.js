const Post = require('./models/Post.model')


// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
      hello: () => {
          return "Hello world!"
      },
      getAllPosts: async () => {
        return  await Post.find()
       
        
      },
      getPost : async (_parent, {id}, _context,_info) => {
          return await Post.findById(id)
      }
    },
    Mutation: {
      createPost: async (parent, args, context, info) => {
          const {title, description} = args.post
          const post = new Post({title, description})
          await post.save()
          return post
           
      }
    }
  };

  module.exports = resolvers;