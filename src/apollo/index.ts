import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';

const cache = new InMemoryCache();

const API_BASE_URL = "http://localhost:3001/graphql";

const httpLink = new HttpLink({
    uri: API_BASE_URL,
    headers: {
        authorization: `Bearer`
    }
});

export const client = new ApolloClient({
    link: httpLink,
    cache,
    resolvers: {
        Query: {
            isLoggedIn() {
                return !!localStorage.getItem("token");
            },
            articles() {
                return [
                    {
                        title: "test",
                        description: "lorem ipsum sit amet tsum",
                        image: "https://external-preview.redd.it/GOkP8onbuyjGmN9Rc8Que5mw21CdSw6OuXpAKUuE6-4.jpg?auto=webp&s=2bc0e522d1f2fa887333286d557466b2be00fa5e",
                        url: "https://google.fr"
                    },
                    {
                        title: "test 2",
                        description: "lorem ipsum sit amet tsum",
                        image: "https://www.publicdomainpictures.net/pictures/50000/velka/panorama-landscape.jpg",
                        url: "https://google.fr"
                    }
                ]
            }
        }
    }
});
