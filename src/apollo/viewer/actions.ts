import gql from 'graphql-tag';

export const SET_ACTIVE_VIEW = gql`
  mutation setActiveView($id: String) {
      setActiveView(input: { id: $id }) @client
  }
`;

export const GET_ACTIVE_VIEW = gql`
    query activeView {
        activeView @client {
            id,
            title,
            description,
            image,
            url,
            date
        }
    }
`;
