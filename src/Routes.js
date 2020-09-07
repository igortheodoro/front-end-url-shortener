import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Redirect from "./pages/Redirect";
import Index from "./pages/Index";

export default function MainRoutes() {
  return (
    <Switch>
      <Route path="/entrar">
        <Login />
      </Route>

      <Route path="/registrar">
        <Register />
      </Route>

      <Route path="/perfil">
        <Profile />
      </Route>

      <Route exact path="/">
        <Index />
      </Route>

      <Route path="/">
        <Redirect />
      </Route>
    </Switch>
  );
}
