import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';
import { GET_ARTICLE } from './article/actions';
import { IArticle } from './article/interface';

const cache = new InMemoryCache();

// const API_BASE_URL = "https://api.centre-actu.app/graphql";
const API_BASE_URL = "http://localhost:3001/graphql";

const token = localStorage.getItem("token");
let activeView:IArticle|null = null;

const httpLink = new HttpLink({
    uri: API_BASE_URL,
    headers: {
        authorization: token ? `Bearer ${token}` : ''
    }
});

const _onSetActiveView = (id:String) => {
    if (!id) {
        activeView = null;
        return;
    }
    client.query({query: GET_ARTICLE, variables: {id}}).then(result => {
        activeView = result.data.article;
    });
}

export const client = new ApolloClient({
    link: httpLink,
    cache,
    resolvers: {
        Query: {
            isLoggedIn() {
                return !!localStorage.getItem("token");
            },
            activeView() {
                return activeView;
            },
            viewList() {
                return localStorage.getItem("viewList");
            },
            search() {
                return {
                    query: "",
                    tags: []
                }
            }
        },
        Mutation: {
            setActiveView(_, variables) {
                const id = variables.input.id;
                _onSetActiveView(id);
            }
        },
        Subscription: {
        }
    }
});
