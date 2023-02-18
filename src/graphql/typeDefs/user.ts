import gql from 'graphql-tag';

export const typeDefs = gql`
  type User {
    id: Int!
    firstName: String
    lastName: String
  }

  input UserInput {
    firstName: String
    lastName: String
  }

  extend type Mutation {
    createUser(user: UserInput): User
    updateUser(userId: Int!, user: UserInput): User
  }

  extend type Query {
    user(userId: Int!): User
  }
`;
