import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import PortfolioDetail from "../components/PortfolioDetail";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact={true}></Route>
          <Route path="/portfolio" component={Portfolio} exact={true}></Route>
          <Route path="/portfolio/:id" component={PortfolioDetail}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
