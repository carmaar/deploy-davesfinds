import React from "react";
import "./style.css";
// routes
import Home from "./Home.js";
import Catalog from "./Catalog.js";
import Request from "./Request.js";
import Nav from "./Nav.js";
import Contact from "./Contact.js";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { render } from "@testing-library/react";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Catalog" component={Catalog} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Request" component={Request} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
