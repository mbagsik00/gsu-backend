const fakeUserAvailability = [
  {
    availabilityId: 12,
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
    addUserAvailability: async (_parent, args, { db }) =>
      fakeUserAvailability[0],
    updateUserAvailability: async (_parent, args, { db }) =>
      fakeUserAvailability[0],
  },
};
