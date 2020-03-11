import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Paper from "@material-ui/core/Paper";
const drawerWidth = 240;
//const headerHeight = 60;
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    //height: headerHeight,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  menuButton: {
    marginRight: 36
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
    transition: theme.transitions.create("width", {
      easing: "cubic-bezier(.84,.12,.13,.86)",
      duration: 340
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: "cubic-bezier(.84,.12,.13,.86)",
      duration: 340
    }),
    width: theme.spacing(7) + 1,
    overflowX: "hidden"
  },
  toolbar: {
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2)
  },
  contentContainer: {
    minHeight: `calc(100vh - ${56 + theme.spacing(5)}px)`
  }
}));

export default function Container(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const isSmall = useMediaQuery("(max-width:800px)");
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
