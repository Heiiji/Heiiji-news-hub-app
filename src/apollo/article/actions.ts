import gql from 'graphql-tag';

export const GET_ALL_ARTICLES = gql`
    query Articles {
        articles @client {
            title,
            description,
            image,
            url
        }
    }
`;
