import React from "react";
import "./style.css";
// material-ui
import Container from "@material-ui/core/Container";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";

// react-router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="Nav">
      <Container id="header" maxWidth="sm">
        <Link to="/">
          <h1>Dave's Finds</h1>
        </Link>
        <ul id="nav">
          <li>
            <Link to="/Catalog">
              <Button>Browse</Button>
            </Link>
          </li>
          <li>
            <Link to="/Contact">
              <Button>Contact</Button>
            </Link>
          </li>
          <li>
            <Link to="/Request">
              <Button>Request</Button>
            </Link>
          </li>
        </ul>

        <SearchIcon />
      </Container>
    </div>
  );
}

export default Nav;
