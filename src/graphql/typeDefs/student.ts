import gql from 'graphql-tag';

export const typeDefs = gql`
  type Student {
    id: Int!
    firstName: String
    lastName: String
  }

  input StudentInput {
    firstName: String
    lastName: String
  }

  extend type Mutation {
    createStudent(student: StudentInput): Student
    updateStudent(studentId: Int!, student: StudentInput): Student
  }

  extend type Query {
    student(studentId: Int!): Student
  }
`;
