import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import history from "./history";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

import Home from "../pages/Home";
import Dragons from "../pages/Dragons";
import DragonsDetails from "../pages/DragonsDatails";

const TOKEN_KEY = "jwt";
var seg = 0;

export function Routes() {
  useEffect(() => {
    if (localStorage.getItem(TOKEN_KEY)) {
      document.addEventListener("mousemove", function () {
          /*Caso seja detectado o movimento do mouse, atualizar a variável
            que representa o tempo de inatividade para 0 segundos*/
          seg = 0;
      });

      setInterval(function () {
          seg = seg + 1;
          if (seg === 14400) {
            localStorage.removeItem(TOKEN_KEY);
            window.location.href = "/";
          }
      }, 1000);
    }
  }, [])

  return (
    <Router history={history}>
      <Switch>
        <PublicRoute restricted={true} exact path="/" component={Home} />
        <PrivateRoute exact path="/list-dragons" component={Dragons} />
        <PrivateRoute exact path="/details-dragons/:id" component={DragonsDetails} />
        {/* <Route path="*" component={NotFoundPage} /> */}
      </Switch>
    </Router>
  );
};
