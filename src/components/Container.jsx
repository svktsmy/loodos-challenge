import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import clsx from "clsx";
import React, { useState } from "react";
import Avatar from "./Avatar";

const drawerWidth = "20%";

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  menuButton: {
    marginRight: 12
  },
  hide: {
    display: "none"
  },
  drawer: {
    flexShrink: 0,
    whiteSpace: "nowrap",
    width: drawerWidth,
    minWidth: "240px"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width"),
    overflow: "hidden"
  },
  drawerClose: {
    transition: theme.transitions.create("width"),
    width: theme.spacing(7),
    overflow: "hidden"
  },
  toolbar: {
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
    transition: theme.transitions.create("margin"),
    [theme.breakpoints.down("sm")]: {
      padding: 0
    }
  },
  contentOpen: {
    marginLeft: drawerWidth,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0
    }
  },
  contentClose: {
    marginLeft: theme.spacing(7),
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0
    }
  },
  contentContainer: {
    padding: theme.spacing(2)
  }
}));

export default function Container(props) {
  const classes = useStyles();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);

  const toogleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* App Bar */}
      <AppBar elevation={1} className={classes.appBar}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" onClick={toogleDrawer} edge="start" className={classes.menuButton}>
            {open ? <MenuOpenIcon /> : <MenuIcon />}
          </IconButton>
          <Typography variant="h6" noWrap>
            Loodos
          </Typography>
        </Toolbar>
      </AppBar>
      {/* Drawer */}
      <Drawer
        variant={isSmall ? undefined : "permanent"}
        open={open}
        onClose={toogleDrawer}
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open && !isSmall,
          [classes.drawerClose]: !open && !isSmall
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open && !isSmall,
            [classes.drawerClose]: !open && !isSmall
          })
        }}
      >
        <div className={classes.toolbar} />
        <Avatar open={open}></Avatar>
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      {/* Content */}
      <div
        className={clsx(classes.content, {
          [classes.contentOpen]: open,
          [classes.contentClose]: !open
        })}
      >
        <div className={classes.toolbar} />
        <Paper className={classes.contentContainer} variant="outlined" square>
          {props.children}
        </Paper>
      </div>
    </div>
  );
}
