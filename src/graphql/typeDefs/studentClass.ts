import gql from 'graphql-tag';

export const typeDefs = gql`
  input BookClassInput {
    userId: Int!
    weekNumber: Int!
    availablityId: Int!
  }

  type Booking {
    userId: Int!
    availabilityId: Int!
    start: String!
    end: String!
  }

  type StudentClasses {
    weekNumber: Int!
    bookings: [Booking!]
  }

  extend type Mutation {
    bookClass(studentId: Int!, booking: BookClassInput): [StudentClasses]
  }

  extend type Query {
    getClasses(studentId: Int!, weekNumber: Int): [StudentClasses]
  }
`;
