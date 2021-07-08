import { ApolloClient, HttpLink, InMemoryCache, makeVar } from "@apollo/client";
import { IArticle } from "./article/interface";

export const activeSearchVar = makeVar({
  query: "",
  tags: [],
});

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        search: {
          read() {
            return activeSearchVar();
          },
        },
      },
    },
  },
});

// const API_BASE_URL = "https://api.centre-actu.app/graphql";
const API_BASE_URL = "http://localhost:3001/graphql";

const token = localStorage.getItem("token");
let activeView: IArticle | null = null;

const httpLink = new HttpLink({
  uri: API_BASE_URL,
  headers: {
    authorization: token ? `Bearer ${token}` : "",
  },
});

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
    },
    Mutation: {},
    Subscription: {},
  },
});
