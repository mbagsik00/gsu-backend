const fakeUserAvailability = [
  {
    id: 12,
    weekNumber: 1,
    day: 'monday',
    start: new Date().toISOString(),
    end: new Date().toISOString(),
    status: 'available',
  },
];

export const resolvers = {
  Query: {
    getUserAvailability: async (_parent, args, { db }) => fakeUserAvailability,
  },
  Mutation: {
    addUserAvailability: async (_parent, { availability }, { db }) => {
      const {
        userId,
        weekNumber,
        availability: { day, start, end, status },
      } = availability;

      // TODO:
      // - validate user exist
      // - validate start and end should be in 7-10pm
      // - validate start and end should be the same day
      // - validate it should not conflict with other saved availability
      //   within same weekNumber and day
      // - Check if start and end is >= 3 hours
      // - object validation using yup?

      const result = await db.availability.create({
        userId,
        weekNumber,
        day,
        start,
        end,
        status,
      });

      return result;
    },
    updateUserAvailability: async (_parent, args, { db }) =>
      fakeUserAvailability[0],
  },
};
