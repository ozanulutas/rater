const { gql } = require("@apollo/client");

export const GET_EMPLOYEES = gql`
  query GetEmployees {
    employees {
      id
      firstName
      lastName
      imgUrl
      jobTitle
      rating
      email
      phoneNumber
      address {
        city
        street
        number
        state
        country
      }
    }
  }
`;

export const GET_EMPLOYEE_BY_ID = gql`
  query GetEmployeeById($employeeId: ID!) {
    employee(id: $employeeId) {
      id
      firstName
      lastName
      imgUrl
      jobTitle
      rating
      email
      phoneNumber
      address {
        city
        street
        number
        state
        country
      }
    }
  }
`;
