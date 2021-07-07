import gql from "graphql-tag";

export const GET_ALL_THREAD = gql`
  query GetAllThread {
    threads {
      id
      name
      description
      language
      image
      domain
      url
      status
      tags
      private
    }
  }
`;

export const CREATE_THREAD = gql`
  mutation CreateThread($url: String!) {
    createThread(url: $url) {
      name
      language
      description
      image
      id
      domain
      url
    }
  }
`;

export default {
  GET_ALL_THREAD,
  CREATE_THREAD,
};
