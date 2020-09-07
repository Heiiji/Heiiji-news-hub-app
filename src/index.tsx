import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from "@apollo/client";
import { Router as BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./styles/theme";

import { client } from "./apollo";
import './index.scss';
import * as serviceWorker from './serviceWorker';
import Router from "./Router";

import history from "./_helpers/history";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
        <BrowserRouter history={history}>
          <ThemeProvider theme={darkTheme}>
            <Router />
          </ThemeProvider>
        </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
