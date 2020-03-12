import React, { useState } from "react";
import Container from "./components/Container";
import Paper from "@material-ui/core/Paper";
import { Chart, ArgumentAxis, ValueAxis, SplineSeries } from "@devexpress/dx-react-chart-material-ui";
import { makeStyles } from "@material-ui/core/styles";
import useInterval from "./utils/useInterval";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import Grid from "@material-ui/core/Grid";

const data = [
  { type: "line", title: "Q1 Sales" },
  { type: "pie", title: "Sales" },
  { type: "line", title: "Sales" },
];

export default function App() {
  return (
    <Container>
      <Grid container spacing={2}>
        {data.map(d => (
          <Grid item xs={12} md={6} xl={4}>
            {d.type === "line" ? <LineChart title={d.title}></LineChart> : <PieChart title={d.title}></PieChart>}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
