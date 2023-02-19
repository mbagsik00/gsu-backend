export const resolvers = {
  Query: {
    student: async (_parent, args, { db }) => 'Placeholder',
  },
  Mutation: {
    createStudent: async (_parent, args, { db }) => 'Placeholder',
    updateStudent: async (_parent, args, { db }) => 'Placeholder',
  },
};
