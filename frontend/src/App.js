import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import View from "./View.js";
import Home from "./Home.js";
import Register from "./Register.js";

function App() {

  return (
      <Router>
        <div classname="app">
          <Switch>
            <Route path="/products">
              <View />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;