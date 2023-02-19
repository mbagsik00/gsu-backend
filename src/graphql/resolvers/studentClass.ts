export const resolvers = {
  Query: {
    getClasses: async (_parent, args, { db }) => 'Placeholder',
  },
  Mutation: {
    bookClass: async (_parent, { booking }, { db }) => {
      const { studentId, availabilityId } = booking;

      // TODO:
      // - Validate studentId exists
      // - Validate availabilityId exists
      // - Use result from availability to populate the return value

      const result = await db.studentClass.create({
        studentId,
        availabilityId,
      });

      return {
        availabilityId: result.availabilityId,
        // fake
        userId: 1,
        day: 'MONDAY',
        start: new Date().toISOString(),
        end: new Date().toISOString(),
        status: 'BOOKED',
      };
    },
  },
};
