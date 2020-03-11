import React, { useState } from "react";
import Container from "./components/Container";
import Paper from "@material-ui/core/Paper";
import { Chart, ArgumentAxis, ValueAxis, SplineSeries } from "@devexpress/dx-react-chart-material-ui";
import { makeStyles } from "@material-ui/core/styles";
import useInterval from "./utils/useInterval";
import LineChart from "./components/LineChart";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1)
  }
}));
export default function App() {
  const classes = useStyles();
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
          <LineChart></LineChart>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
          <LineChart></LineChart>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
          <LineChart></LineChart>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
          <LineChart></LineChart>
        </Grid>
      </Grid>
    </Container>
  );
}
// import React, { useState } from "react";
// import Container from "./components/Container";
// import Paper from "@material-ui/core/Paper";
// import { Chart, ArgumentAxis, ValueAxis, SplineSeries } from "@devexpress/dx-react-chart-material-ui";
// import { makeStyles } from "@material-ui/core/styles";
// import useInterval from "./utils/useInterval";
// import LineChart from "./components/LineChart";
// import Grid from "@material-ui/core/Grid";
// const useStyles = makeStyles(theme => ({
//   root: {
//     display: "flex",
//     flexWrap: "wrap",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// }));
// export default function App() {
//   const classes = useStyles();
//   return (
//     <Container>
//       <div className={classes.root}>
//         <LineChart></LineChart>
//         <LineChart></LineChart>
//         <LineChart></LineChart>
//         <LineChart></LineChart>
//         <LineChart></LineChart>
//         <LineChart></LineChart>
//         <LineChart></LineChart>
//         <LineChart></LineChart>
//         <LineChart></LineChart>
//         <LineChart></LineChart>
//         <LineChart></LineChart>
//         <LineChart></LineChart>
//         <LineChart></LineChart>
//         <LineChart></LineChart>
//       </div>
//     </Container>
//   );
// }
