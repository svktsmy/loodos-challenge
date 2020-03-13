import { Box, Typography } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    margin: theme.spacing(1, 1),
    alignItems: "center"
  }
}));

export default function AvatarC(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar src="https://cdn.webrazzi.com/uploads/2019/06/jony-ivy-471.png"></Avatar>
      <Typography>
        <Box ml={3} fontWeight={400} fontSize={22}>
          Jony Ivy
        </Box>
        <Box ml={3} fontWeight={300} fontSize={16}>
          @Loodos
        </Box>
      </Typography>
    </div>
  );
}
