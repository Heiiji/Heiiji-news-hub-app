import gql from 'graphql-tag';

export const GET_ALL_ARTICLES = gql`
    query Articles {
        articles {
            title,
            description,
            image,
            url
        }
    }
`;
