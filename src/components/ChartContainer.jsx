import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import { ResponsiveContainer } from "recharts";
import useInterval from "../utils/useInterval";
import { useMediaQuery, useTheme, Divider } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import RefreshIcon from "@material-ui/icons/Refresh";
import Menu from "./Menu";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),

    //alignItems: "center",
    justifyContent: "center"
  },
  divider: {
    margin: theme.spacing(1, 0)
  },
  option: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  x: {
    flex: 1
  }
}));

export default function ChartContainer({ title, children, onRefresh }) {
  const classes = useStyles();
  const theme = useTheme();
  let [delay, setDelay] = useState(5000);
  useInterval(onRefresh, delay);
  const height = useMediaQuery(theme.breakpoints.up("sm")) ? 300 : 200;
  const width = useMediaQuery(theme.breakpoints.up("sm")) ? 650 : 400;
  return (
    <Paper className={classes.root} variant="outlined" square>
      <Typography variant="h5">{title}</Typography>
      <ResponsiveContainer className={classes.x} width="99%" aspect={1.7} debounce={1}>
        {children}
      </ResponsiveContainer>
      <Divider className={classes.divider}></Divider>
      <div className={classes.option}>
        <Menu data={delay} onSelect={delay => setDelay(delay)}></Menu>
        <IconButton color="primary" aria-label="upload picture" component="span" onClick={onRefresh}>
          <RefreshIcon />
        </IconButton>
      </div>
    </Paper>
  );
}
