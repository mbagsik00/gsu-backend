import { getUserById } from '../../services/user';
import {
  addUserAvailability,
  getUserAvailability,
  IAvailability,
} from '../../services/availability';
import { GraphQLError } from 'graphql';

export const resolvers = {
  Query: {
    getUserAvailability: async (_, { userId }) => {
      const user = await getUserById(userId);

      if (!user) {
        throw new GraphQLError('User not found.');
      }

      return await getUserAvailability(userId);
    },
  },
  Mutation: {
    addUserAvailability: async (
      _,
      { availability }
    ): Promise<IAvailability> => {
      const {
        userId,
        weekNumber,
        availability: { day, start, end, status },
      } = availability;

      const user = await getUserById(userId);

      if (!user) {
        throw new GraphQLError('User not found.');
      }

      // TODO:
      // - validate start and end should be in 7-10pm
      // - validate start and end should be the same day
      // - validate it should not conflict with other saved availability
      //   within same weekNumber and day
      // - Check if start and end is >= 3 hours if not return with message of recommendation
      // - object validation using yup?

      return addUserAvailability({
        userId,
        weekNumber,
        day,
        start,
        end,
        status,
      });
    },
    updateUserAvailability: async (_, args) => 'Placeholder',
  },
};
