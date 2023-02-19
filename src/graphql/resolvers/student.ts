export const resolvers = {
  Query: {
    student: async (_parent, args, { db }) => 'Placeholder',
  },
  Mutation: {
    createStudent: async (_parent, { student }, { db }) => {
      const { firstName, lastName } = student;

      const result = await db.student.create({
        firstName,
        lastName,
      });

      return result;
    },
    updateStudent: async (_parent, args, { db }) => 'Placeholder',
  },
};
