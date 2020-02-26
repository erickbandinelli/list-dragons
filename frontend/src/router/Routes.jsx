import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import history from "./history";

import Home from "../pages/Home";
import Details from "../pages/Details";

export function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/details/:id" component={Details} />
        {/* <Route path="*" component={NotFoundPage} /> */}
      </Switch>
    </Router>
  );
};
