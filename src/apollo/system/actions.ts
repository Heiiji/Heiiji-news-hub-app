import gql from "graphql-tag";

export const ACTIVE_SEARCH = gql`
  query activeSearch {
    search @client
  }
`;
