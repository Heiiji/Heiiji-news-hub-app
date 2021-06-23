import gql from 'graphql-tag';

export const CREATE_THREAD = gql`
    mutation CreateThread($url: String!) {
        createThread(url: $url) {
        name,
        language,
        description,
        image,
        id,
        domain,
        url
        }
    }
`;
