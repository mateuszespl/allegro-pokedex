import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "views/Main";

export const Router = () => {
  return (
    <main className="main">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Main} />
        </Switch>
      </BrowserRouter>
    </main>
  );
};
