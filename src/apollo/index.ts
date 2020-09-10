import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';

const cache = new InMemoryCache();

const API_BASE_URL = "https://api.centre-actu.app/graphql";
// const API_BASE_URL = "http://localhost:3001/graphql";

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
            }
        }
    }
});
