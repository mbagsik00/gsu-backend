import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import database from './database';

import { typeDefs as availabilityTypeDefs } from './graphql/typeDefs/availability';
import { typeDefs as studentTypeDefs } from './graphql/typeDefs/student';
import { typeDefs as studentClassTypeDefs } from './graphql/typeDefs/studentClass';
import { typeDefs as userTypeDefs } from './graphql/typeDefs/user';

import { resolvers as availabilityResolvers } from './graphql/resolvers/availability';
import { resolvers as studentResolvers } from './graphql/resolvers/student';
import { resolvers as studentClassResolvers } from './graphql/resolvers/studentClass';
import { resolvers as userResolvers } from './graphql/resolvers/user';
import { Sequelize } from 'sequelize';

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

interface ContextValue {
  db: Sequelize;
}

const startServer = () =>
  startStandaloneServer<ContextValue>(server, {
    listen: { port: 4000 },
    context: async () => ({
      db: database,
    }),
  });

startServer();

console.log(`🚀🚀🚀  Server ready at port 4000 🚀🚀🚀`);
