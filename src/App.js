import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./View/Main/Main";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </div>
  );
};

export default App;
