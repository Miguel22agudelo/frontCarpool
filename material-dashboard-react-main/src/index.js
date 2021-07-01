import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";

import "assets/css/material-dashboard-react.css?v=1.10.0";
import SignIn from "./layouts/SignIn";
import SignUp from "./layouts/SignUp";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/SignIn" component={SignIn} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/admin" component={Admin} />
      <Route path="/rtl" component={RTL} />
      <Redirect from="/" to="/SignIn" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
