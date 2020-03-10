import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Badges from "../pages/Badges";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import { Layout } from "./Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/badges" component={Badges} />

          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
