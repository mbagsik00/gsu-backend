export const resolvers = {
  Query: {
    getUserAvailability: async () => [
      {
        weekNumber: 1,
        availability: [
          {
            availabilityId: 12,
            day: 'test',
            start: 'test',
            end: 'test',
            status: 'test',
          },
        ],
      },
    ],
  },
  Mutation: {
    addUserAvailability: async () => 'Placeholder',
    updateUserAvailability: async () => 'Placeholder',
  },
};
