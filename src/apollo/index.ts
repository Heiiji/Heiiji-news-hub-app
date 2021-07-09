import {
  ApolloClient,
  from,
  HttpLink,
  InMemoryCache,
  makeVar,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
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

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ extensions }) => {
      if (extensions?.code === "403") {
        localStorage.removeItem("token"); // TODO : Rework token flow
        window.location.reload(false);
      }
    });
  }
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

export const client = new ApolloClient({
  link: from([errorLink, httpLink]),
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
