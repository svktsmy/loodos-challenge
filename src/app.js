import React from "react";
import Container from "./components/Container";
import Paper from "@material-ui/core/Paper";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    //margin: theme.spacing(1),
    height: "100%"
  }
}));
export default function App() {
  const classes = useStyles();
  return (
    <Container>
      <div>dasd</div>
    </Container>
  );
}
