import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "views/Main";

export const Router = () => {
  return (
    <main className="main">
      <BrowserRouter>
        <Switch>
          <Route path="/:currentPage" component={Main} />
          <Route path="/" component={Main} />
        </Switch>
      </BrowserRouter>
    </main>
  );
};
