import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import { Typography, Box } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    margin: theme.spacing(1, 1),
    alignItems: "center",
    transition: theme.transitions.create("margin")
  },
  rootOpen: {
    margin: theme.spacing(3, 3)
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500]
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500]
  }
}));

export default function AvatarC(props) {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, {
        [classes.rootOpen]: props.open
      })}
    >
      <Avatar src="https://i4.hurimg.com/i/hurriyet/75/750x422/5b581c820e32f82b8cba57f0.jpg"></Avatar>
      <Typography component="div">
        <Box ml={1} fontSize="1.3em">
          Kawhi Leonard
        </Box>
        <Box ml={1} fontWeight="fontWeightLight" ml={1}>
          Loodos
        </Box>
      </Typography>
    </div>
  );
}
