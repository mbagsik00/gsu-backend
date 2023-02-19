import gql from 'graphql-tag';

export const typeDefs = gql`
  type Availability {
    id: Int!
    weekNumber: Int!
    day: String!
    start: String!
    end: String!
    status: String!
  }

  input AvailabilityDateTime {
    day: String! # monday, tuesday, wednesday, ...
    start: String!
    end: String!
    status: String
  }

  input AddAvailabilityInput {
    userId: Int!
    weekNumber: Int!
    availability: AvailabilityDateTime!
  }

  input UpdateAvailabilityInput {
    weekNumber: Int!
    day: String!
    start: String!
    end: String!
    status: String!
  }

  type Mutation {
    addUserAvailability(availability: AddAvailabilityInput!): Availability

    updateUserAvailability(
      availabilityId: Int!
      availability: UpdateAvailabilityInput
    ): Availability
  }

  type Query {
    getUserAvailability(userId: Int!): [Availability]
  }
`;
