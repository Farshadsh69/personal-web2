import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { getTranslates, changeLanguage, lang } from "../localization/index";
import profileImage from "../assets/images/profile.jpg";
import { Button, ListItem, ListItemText } from "@material-ui/core";
import HomeScreen from "./HomeScreen";
import AboutScreen from "./AboutScreen";
import PortfoliosScreen from "./PortfoliosScreen";
import ContactScreen from "./ContactScreen";
import ResumeScreen from "./ResumeScreen";
import "./index.css";

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    portfolios: "relative",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: 50,
    height: 50,
    backgroundColor: theme.palette.primary.backgroundColor,
    borderRadius: 0,
    border: "1px solid #2e344e",
    // position: "absolute",
    top: 20,
    zIndex: 100,
    position: "fixed",

    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  topDrawer: {
    width: "100%",
    padding: 10,
    borderBottom: "1px solid #2e344e",
    textAlign: "center",
  },
  profileImage: {
    width: 200,
    height: 200,
    maxWidth: "100%",
    borderRadius: 100,
    border: "7px solid #2e344e",
    verticalAlign: "middle",
  },
  centerDrawer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonDrawer: {
    textAlign: "center",
    padding: 15,
    borderTop: "1px solid #2e344e",
  },
  drawerPaper: {
    width: drawerWidth,
    height: "100vh",
    backgroundColor: "#191d2b",
    borderRight: "1px solid #2e344e",
  },
  content: {
    flexGrow: 1,
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    position: "relative",
  },
}));

function ResponsiveDrawer(props) {
  const [page, setPage] = useState(0);
  const translate = getTranslates();
  const { window } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const getPage = () => {
    switch (page) {
      case 0:
        return <HomeScreen />;
      case 1:
        return <AboutScreen />;
      case 2:
        return <ResumeScreen />;
      case 3:
        return <PortfoliosScreen />;
      case 4:
        return <ContactScreen />;
      default:
        return <HomeScreen />;
    }
  };

  const drawer = (
    <>
      <div className={classes.topDrawer}>
        <img
          src={profileImage}
          alt={translate.name}
          className={classes.profileImage}
        />
      </div>

      <div className={classes.centerDrawer}>
        <List style={{ width: "100%" }}>
          <ListItem
            style={{
              paddingLeft: 0,
              paddingRight: 0,
              textAlign: "center",
              backgroundColor: page === 0 ? "#037fff" : "transparent",
            }}
            className={page === 0 ? null : "listItem"}
            onClick={() => {
              setPage(0);
              setMobileOpen(false);
            }}
            button
          >
            <ListItemText
              Typography={true}
              children={
                <Typography className="listItemText" variant="body">
                  {translate.home}
                </Typography>
              }
            />
            <div className="overlay" />
          </ListItem>
          <ListItem
            style={{
              paddingLeft: 0,
              paddingRight: 0,
              textAlign: "center",
              backgroundColor: page === 1 ? "#037fff" : "transparent",
            }}
            className={page === 1 ? null : "listItem"}
            onClick={() => {
              setPage(1);
              setMobileOpen(false);
            }}
            button
          >
            <ListItemText
              Typography={true}
              children={
                <Typography className="listItemText" variant="body">
                  {translate.about}
                </Typography>
              }
            />
            <div className="overlay" />
          </ListItem>
          <ListItem
            style={{
              paddingLeft: 0,
              paddingRight: 0,
              textAlign: "center",
              backgroundColor: page === 2 ? "#037fff" : "transparent",
            }}
            className={page === 2 ? null : "listItem"}
            onClick={() => {
              setPage(2);
              setMobileOpen(false);
            }}
            button
          >
            <ListItemText
              Typography={true}
              children={
                <Typography className="listItemText" variant="body">
                  {translate.resume}
                </Typography>
              }
            />
            <div className="overlay" />
          </ListItem>
          <ListItem
            style={{
              paddingLeft: 0,
              paddingRight: 0,
              textAlign: "center",
              backgroundColor: page === 3 ? "#037fff" : "transparent",
            }}
            className={page === 3 ? null : "listItem"}
            onClick={() => {
              setPage(3);
              setMobileOpen(false);
            }}
            button
          >
            <ListItemText
              Typography={true}
              children={
                <Typography className="listItemText" variant="body">
                  {translate.portfolios}
                </Typography>
              }
            />
            <div className="overlay" />
          </ListItem>
          <ListItem
            style={{
              paddingLeft: 0,
              paddingRight: 0,
              textAlign: "center",
              backgroundColor: page === 4 ? "#037fff" : "transparent",
            }}
            className={page === 4 ? null : "listItem"}
            onClick={() => {
              setPage(4);
              setMobileOpen(false);
            }}
            button
          >
            <ListItemText
              Typography={true}
              children={
                <Typography className="listItemText" variant="body">
                  {translate.contact}
                </Typography>
              }
            />
            <div className="overlay" />
          </ListItem>
        </List>
      </div>
      <div className={classes.buttonDrawer}>
        <Button
          style={{ fontSize: 20 }}
          onClick={() => {
            changeLanguage("fa");
          }}
          color={lang === "fa" ? "primary" : "secondary"}
        >
          فارسی
        </Button>
        {"/"}
        <Button
          style={{ fontSize: 17 }}
          onClick={() => {
            changeLanguage("en");
          }}
          color={lang === "en" ? "primary" : "secondary"}
        >
          English
        </Button>
      </div>
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <span className="line1" />
        <span className="line2" />
        <span className="line3" />
        <span className="line4" />
        {getPage()}
      </main>
    </div>
  );
}

export default ResponsiveDrawer;
