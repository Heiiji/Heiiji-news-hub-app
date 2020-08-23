import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from 'react-router-dom';

import { client } from "./apollo";
import './index.scss';
import * as serviceWorker from './serviceWorker';
import Router from "./Router";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
