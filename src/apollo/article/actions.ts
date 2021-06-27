import gql from 'graphql-tag';

export const GET_ALL_ARTICLES = gql`
    query Articles {
        articles {
            id,
            title,
            description,
            image,
            url,
            date
        }
    }
`;

export const GET_ARTICLE = gql`
    query Article($id: String!) {
        article(id: $id) {
            id,
            title,
            description,
            image,
            url,
            date
        }
    }
`;

export const SEARCH_ARTICLES = gql`
    query SearchArticles($search: String!) {
        searchArticles(search: $search) {
            id,
            title,
            description,
            image,
            url,
            date
        }
    }
`;
