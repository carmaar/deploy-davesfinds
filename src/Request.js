import React from "react";

import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { render } from "@testing-library/react";

function Request() {
  return (
    <Router>
      <Container id="request">
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum culpa vel ea consequuntur molestias ipsum quia perferendis possimus excepturi minima voluptate, itaque quibusdam hic reiciendis? Debitis minus quasi mollitia exercitationem?</div>
      <form id="requestForm" action="" method="get">
      <TextField label="First Name" />
      <TextField label="Last Name" />
      <TextField label="E-mail" />
      <TextField label="Phone"/>
      <br/>
      <TextField label="Item Description"
                 multiline rows={5}/>

      <button type="submit" id="requestSubmit">Submit</button>
      </form>
    </Container>
    </Router>
  );
}

export default Request;
