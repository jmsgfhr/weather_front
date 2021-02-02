import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./assets/css/reset.css";
import Home from "./pages/home/index";
import WeatherDetails from "./pages/detalhesTempo/index";
import History from "./pages/historico/index";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path={"/"} component={Home} exact />
      <Route path={"/detalhesTempo"} component={WeatherDetails} exact />
      <Route path={"/historico"} component={History} exact />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
