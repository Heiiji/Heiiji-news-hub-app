import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
      login(input: { email: $email, password: $password }) {
          token
        }
  }
`;

export const SIGNUP = gql`
  mutation signup($email: String!, $password: String!, $username: String!) {
    signup(input: { email: $email, password: $password, username: $username }) {
        username,
        id
      }
  }
`;

export const CHANGE_PASSWORD = gql`
mutation($oldPassword: String!, $password: String!) {
    changePassword(input: {oldPassword: $oldPassword, password: $password}) {
      id,
      email
    }
  }
`;

export const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;
