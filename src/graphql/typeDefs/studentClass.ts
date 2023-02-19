import gql from 'graphql-tag';

export const typeDefs = gql`
  input BookClassInput {
    studentId: Int!
    availabilityId: Int!
  }

  type ClassBooking {
    userId: Int!
    availabilityId: Int!
    weekNumber: Int!
    day: String!
    start: String!
    end: String!
    status: String!
  }

  extend type Mutation {
    bookClass(booking: BookClassInput): ClassBooking
  }

  extend type Query {
    getClasses(studentId: Int!, weekNumber: Int): [ClassBooking]
  }
`;
