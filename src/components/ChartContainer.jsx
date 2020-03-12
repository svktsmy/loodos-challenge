//import { ArgumentAxis, Chart, SplineSeries, ValueAxis } from "@devexpress/dx-react-chart-material-ui";

import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { ResponsiveContainer } from "recharts";
import useInterval from "../utils/useInterval";
import { useMediaQuery, useTheme, Divider } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
    padding: theme.spacing(2),

    alignItems: "center",
    justifyContent: "center"
  },
  divider: {
    margin: theme.spacing(1, 0)
  }
}));

export default function ChartContainer({ title, children, onRefresh }) {
  const classes = useStyles();
  const theme = useTheme();
  //useInterval(onRefresh, 3000);
  const height = useMediaQuery(theme.breakpoints.up("sm")) ? 300 : 200;
  return (
    <Paper className={classes.root} variant="outlined" square>
      <Typography variant="h5">{title}</Typography>
      <ResponsiveContainer width={"99%"} height={height}>
        {children}
      </ResponsiveContainer>
      <Divider className={classes.divider}></Divider>
      <IconButton color="primary" aria-label="upload picture" component="span">
        <PhotoCamera />
      </IconButton>
      
    </Paper>
  );
}
