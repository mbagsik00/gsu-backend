import { createUser, IUser } from '../../services/user';

export const resolvers = {
  Query: {
    user: async (_parent, args) => 'Placeholder',
  },
  Mutation: {
    createUser: async (_parent, { user }): Promise<IUser> => createUser(user),
    updateUser: async (_parent, args) => 'Placeholder',
  },
};
