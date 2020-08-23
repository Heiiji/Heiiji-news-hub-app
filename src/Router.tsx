import React from 'react';
import { Switch, Route } from "react-router-dom";

import App from "./App";

function Router() {
    return (
        <Switch>
            <Route exact path="/">
                <App/>
            </Route>
        </Switch>
    );
}

export default Router;