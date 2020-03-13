import { Divider } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import RefreshIcon from "@material-ui/icons/Refresh";
import React, { useState } from "react";
import { ResponsiveContainer } from "recharts";
import useInterval from "../utils/useInterval";
import Menu from "./Menu";

const dataIntervals = [
  { label: "5 Sec.", value: 5000 },
  { label: "15 Sec.", value: 15000 },
  { label: "45 Sec.", value: 45000 },
  { label: "5 Min.", value: 60000 * 5 }
];
const dataRanges = [
  { label: "Last 3M", value: 3 },
  { label: "Last 6M", value: 6 },
  { label: "Last Year", value: 12 }
];

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 2, 0.5, 2)
  },
  divider: {
    margin: theme.spacing(0.5, 0)
  },
  option: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    "& > *": {
      margin: theme.spacing(0, 0.5)
    }
  }
}));

export default function ChartContainer({ title, children, onRefresh }) {
  const classes = useStyles();

  let [delay, setDelay] = useState(dataIntervals[3]);
  let [range, setRange] = useState(dataRanges[0]);
  useInterval(onRefresh, delay.value);

  return (
    <Paper className={classes.root} variant="outlined" square>
      <Typography variant="h6">{title}</Typography>
      <Divider className={classes.divider}></Divider>
      <ResponsiveContainer className={classes.x} width="99%" aspect={1.7}>
        {children}
      </ResponsiveContainer>
      <Divider className={classes.divider}></Divider>
      <div className={classes.option}>
        <Menu data={dataIntervals} value={delay} onSelect={delay => setDelay(delay)}></Menu>
        <Menu
          data={dataRanges}
          value={range}
          onSelect={range => {
            onRefresh();
            setRange(range);
          }}
        ></Menu>
        <IconButton color="primary" onClick={onRefresh}>
          <RefreshIcon />
        </IconButton>
      </div>
    </Paper>
  );
}
