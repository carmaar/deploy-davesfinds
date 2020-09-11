import React from "react";
import "./style.css";
import CustomizedDialogs from "./CustomizedDialogs.js";

// material-ui
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

// images
import square from "./square.png";



import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { render } from "@testing-library/react";

function Catalog() {
  return (
    <Router>
      <Container id="catalog" maxWidth="lg">
        <title>Dave's Finds | Vintage Items and Collectables: Catalog</title> 
          <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="center"
          alignContent="center"
          wrap="wrap"
        >
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
        </Grid>
      </Container>
    </Router>
  );
}

const MediaCard = () => (
  <Card className="cardStyle" >
    <CardActionArea>
      <CardMedia src={square} component="img" title="Image" />
      <CardContent>
        <Container className="itemHead">
          <Typography gutterBottom variant="h5" component="h2">
            Item
          </Typography>{" "}
          <Typography gutterBottom variant="h5" component="h2">
            $$$
          </Typography>
        </Container>

        <Typography variant="body2"  component="p">
          This is an item description. Just a couple lines of text is ideal.
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      {/* <Button
        size="medium"
        className="interestButton"
>
        Interested
      </Button> */}
      <CustomizedDialogs maxWidth="lg"/>
    </CardActions>
  </Card>
);



export default Catalog;
