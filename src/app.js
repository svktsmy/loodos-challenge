import Grid from "@material-ui/core/Grid";
import React from "react";
import Container from "./components/Container";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";

const data = [
  { type: "line", title: "Q1 Sales" },
  { type: "pie", title: "Sales" },
  { type: "pie", title: "Sales" },
  { type: "line", title: "Q2 Sales" },
  { type: "line", title: "Q2 Sales" },
  { type: "line", title: "Q2 Sales" },
  { type: "pie", title: "Sales" },
  { type: "pie", title: "Sales" }
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
