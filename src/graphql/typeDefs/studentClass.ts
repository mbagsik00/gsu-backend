import gql from 'graphql-tag';

export const typeDefs = gql`
  input BookClassInput {
    weekNumber: Int!
    availablityId: Int!
  }

  type ClassBooking {
    userId: Int!
    availabilityId: Int!
    start: String!
    end: String!
  }

  type StudentClassBooking {
    weekNumber: Int!
    classes: [ClassBooking!]
  }

  extend type Mutation {
    bookClass(studentId: Int!, booking: BookClassInput): [StudentClassBooking]
  }

  extend type Query {
    getClasses(studentId: Int!, weekNumber: Int): [StudentClassBooking]
  }
`;
