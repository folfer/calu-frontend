import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../src/pages/HomePage";
import GamePage from "./pages/GamePage";

const src: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/play" component={GamePage} />
    </Switch>
  );
};

export default src;
