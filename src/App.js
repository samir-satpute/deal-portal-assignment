import React, { Fragment } from "react";
import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Header from "../src/Layout/Header";
import Home from "./pages/Home";

function App() {
  return (
    <Fragment>
      <Header />
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    </Fragment>
  );
}

export default App;
