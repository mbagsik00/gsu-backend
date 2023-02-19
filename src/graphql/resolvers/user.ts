export const resolvers = {
  Query: {
    user: async (_parent, args, { db }) => 'Placeholder',
  },
  Mutation: {
    createUser: async (_parent, { user }, { db }) => {
      const { firstName, lastName } = user;

      const result = await db.user.create({
        firstName,
        lastName,
      });

      return result;
    },
    updateUser: async (_parent, args, { db }) => 'Placeholder',
  },
};
