import React from 'react';
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Search from "./pages/Search";

function Router() {
    return (
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/search">
                <Search/>
            </Route>
            <Route path="/search/:query">
                <Search/>
            </Route>
        </Switch>
    );
}

export default Router;