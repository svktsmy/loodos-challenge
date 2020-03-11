import { ArgumentAxis, Chart, SplineSeries, ValueAxis } from "@devexpress/dx-react-chart-material-ui";

import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useInterval from "../utils/useInterval";
import getRandomInt from "../utils/getRandomInt";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useMediaQuery } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    alignItems: "center",
    justifyContent: "center"
  }
}));
const generateData = (start, end, step) => {
  const data = [];
  for (let i = start; i < end; i += step) {
    data.push({ value: getRandomInt(10) / i, argument: i });
  }

  return data;
};

export default function LineChart() {
  const classes = useStyles();
  let [delay, setDelay] = useState(3000);
  const isSmall = useMediaQuery("(max-width:600px)");
  let [data, setData] = useState(generateData(1, 4, 0.5));

  useInterval(() => {
    setData(generateData(1, 4, 0.5));
  }, delay);
  return (
    <Paper className={classes.root} variant="outlined" square>
      <Typography variant="h5">Responsive h5</Typography>
      <Chart data={data} width={"100%"} height={250}>
        <ArgumentAxis showGrid />
        <ValueAxis />
        <SplineSeries valueField="value" argumentField="argument" />
      </Chart>
    </Paper>
  );
}
