import Grid from "@material-ui/core/Grid";
import React from "react";
import Container from "../components/Container";
import LineChart from "../components/LineChart";
import PieChart from "../components/PieChart";

const data = [
  { type: "line", title: "X Product Sales" },
  { type: "line", title: "Y Product Sales" },
  { type: "pie", title: "Sales Distribution" },
  { type: "pie", title: "Sales Distribution" }
];

export default function Home() {
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
