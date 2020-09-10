import React from "react";
import "./style.css";
// material-ui
import Container from "@material-ui/core/Container";
// images
import portrait from "./portrait.jpg";


import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { render } from "@testing-library/react";

function Contact() {
  return (
    <Router>
      <Container id="contact">
        <img src={portrait} alt="Dave" />
        <Container>
          <h2>Hi, I'm Dave.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Container id="contactInfo">
            <ul>
              <li>
                <h3>Email</h3>
              </li>
              <li>
                <h3>LinkedIn</h3>
              </li>
              <li>
                <h3>Phone</h3>
              </li>
            </ul>
            <ul>
              <li>
                <h3>
                  <a href="./">ifsudly.gmail.com</a>
                </h3>
              </li>
              <h3>
                <li>
                  <a href="https://www.linkedin.com/in/dave-pennock-11aa29a3/">
                    /davepennock
                  </a>
                </li>
              </h3>
              <h3>
                <li>
                  <a href="./">816 591 4535</a>
                </li>
              </h3>
            </ul>
          </Container>
        </Container>
      </Container>
    </Router>
  );
}

export default Contact;
