export const resolvers = {
  Query: {
    student: async (_parent, args, { db }) => 'Placeholder',
  },
  Mutation: {
    createStudent: async (_parent, { student }, { db }) => {
      const { firstName, lastName } = student;

      return await db.student.create({
        firstName,
        lastName,
      });
    },
    updateStudent: async (_parent, args, { db }) => 'Placeholder',
  },
};
