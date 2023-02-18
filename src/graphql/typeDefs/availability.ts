import gql from 'graphql-tag';

export const typeDefs = gql`
  type Availability {
    availabilityId: Int!
    day: String!
    start: String!
    end: String!
    status: String!
  }

  type UserAvailability {
    weekNumber: Int!
    availability: [Availability!]!
  }

  input AvailabilityDateTime {
    day: String! # monday, tuesday, wednesday, ...
    start: String!
    end: String!
    status: String
  }

  # Input for adding new availablity record for the user
  input AddAvailabilityInput {
    userId: Int!
    weekNumber: Int!
    availability: AvailabilityDateTime!
  }

  # Input for updating single availablity
  input UpdateAvailabilityInput {
    day: String!
    start: String!
    end: String!
    status: String!
  }

  type Mutation {
    addUserAvailability(availability: AddAvailabilityInput!): UserAvailability

    updateUserAvailability(
      availabilityId: Int!
      availability: UpdateAvailabilityInput
    ): Availability
  }

  type Query {
    getUserAvailability(userId: Int!): [UserAvailability]
  }
`;
