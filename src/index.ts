import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { typeDefs as availabilityTypeDefs } from './graphql/typeDefs/availability';
import { typeDefs as studentTypeDefs } from './graphql/typeDefs/student';
import { typeDefs as studentClassTypeDefs } from './graphql/typeDefs/studentClass';
import { typeDefs as userTypeDefs } from './graphql/typeDefs/user';

import { resolvers as availabilityResolvers } from './graphql/resolvers/availability';
import { resolvers as studentResolvers } from './graphql/resolvers/student';
import { resolvers as studentClassResolvers } from './graphql/resolvers/studentClass';
import { resolvers as userResolvers } from './graphql/resolvers/user';

import User from './models/user';
import Student from './models/student';
import Availability from './models/availability';
import StudentClass from './models/studentClass';

const server = new ApolloServer({
  typeDefs: [
    availabilityTypeDefs,
    userTypeDefs,
    studentTypeDefs,
    studentClassTypeDefs,
  ],
  resolvers: [
    availabilityResolvers,
    userResolvers,
    studentResolvers,
    studentClassResolvers,
  ],
});

const startServer = () =>
  startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async () => ({
      db: {
        user: User,
        student: Student,
        availability: Availability,
        studentClass: StudentClass,
      },
    }),
  });

startServer();

console.log(`🚀🚀🚀  Server ready at port 4000 🚀🚀🚀`);
