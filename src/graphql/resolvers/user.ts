export const resolvers = {
  Query: {
    user: async (_parent, args, { db }) => 'Placeholder',
  },
  Mutation: {
    createUser: async (_parent, args, { db }) => 'Placeholder',
    updateUser: async (_parent, args, { db }) => 'Placeholder',
  },
};
