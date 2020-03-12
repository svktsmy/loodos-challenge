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
import React from "react";
import Avatar from "./Avatar";
const drawerWidth = 240;
//const headerHeight = 60;
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    overflowX: "hidden"
  },
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
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    overflowX: "hidden",
    transition: theme.transitions.create("width")
  },
  drawerClose: {
    transition: theme.transitions.create("width"),
    width: theme.spacing(7) + 1,
    overflowX: "hidden"
  },
  toolbar: {
    ...theme.mixins.toolbar
  },
  spacer: {
    flex: 1
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),

    [theme.breakpoints.down("xs")]: {
      padding: 0
    }
  },
  contentContainer: {
    padding: theme.spacing(2)
    //minHeight: `calc(100vh - ${56 + theme.spacing(5)}px)`
  }
}));

export default function Container(props) {
  const classes = useStyles();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = React.useState(false);

  const toogleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar elevation={2} position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" onClick={toogleDrawer} edge="start" className={classes.menuButton}>
            {open ? <MenuOpenIcon /> : <MenuIcon />}
          </IconButton>
          <Typography variant="h6" noWrap>
            {isSmall ? "Small" : "Large"}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant={isSmall ? undefined : "permanent"}
        open={open}
        onClose={toogleDrawer}
        className={
          isSmall
            ? classes.drawer
            : clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open
              })
        }
        classes={
          isSmall
            ? { paper: classes.drawer }
            : {
                paper: clsx({
                  [classes.drawerOpen]: open,
                  [classes.drawerClose]: !open
                })
              }
        }
      >
        <div className={classes.toolbar} />
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
        <div className={classes.spacer}></div>
        <Divider />
        <Avatar open={open}></Avatar>
      </Drawer>
      <div className={classes.content}>
        <div className={classes.toolbar} />

        <Paper className={classes.contentContainer} variant="outlined" square>
          {props.children}
        </Paper>
      </div>
    </div>
  );
}
