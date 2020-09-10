import React from "react";
import "./style.css";
// material-ui
import Container from "@material-ui/core/Container";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { render } from "@testing-library/react";

function Home() {
  return (
    <Router>
      <div id="Home">
        <Container id="land" maxWidth="sm">
          <h1>Uniquely found.</h1>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </h2>
        </Container>
        ;
      </div>
    </Router>
  );
}

export default Home;
