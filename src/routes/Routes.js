import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home/index";

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/home" component={Home}></Route>
        </Switch>
      </Router>
    </>
  );
};

export default AppRoutes;
