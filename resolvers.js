// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
      hello: () => {
          return "Hello world!"
      }
    }
  };

  module.exports = resolvers;