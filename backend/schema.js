const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Employee {
    id: ID!
    name: String!
    email: String!
    salary: Float!
  }

  type Query {
    employees: [Employee]
    employee(id: ID!): Employee
  }
`);
