import React from "react";
import { Grid, IconButton, makeStyles, Typography } from "@material-ui/core";
import "./home.css";
import { Instagram, LinkedIn, Telegram } from "@material-ui/icons";
import { getTranslates } from "../localization";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    overflow: "hidden",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  nameText: {
    color: theme.palette.primary.main,
    [theme.breakpoints.down('xs')]:{
      display:'block',
      fontSize:'2.1000rem'
    }
  },
  divIcons: {
    marginTop: 25,
    textAlign:'center'
  },
  iconButtonStyle: {
    border: "2px solid #2e344e",
    marginRight: 8,
    marginLeft: 8,
    transition: "0.5s",
    "&:hover": {
      borderColor:theme.palette.primary.main,
      color:theme.palette.primary.main,
      transition:'1s',

    },
  },
}));
export default function HomeScreen() {
  const classes = useStyles();
  const translate =getTranslates()
  return (
    <div className={classes.root}>
      <div className="body">
        <div class="light x1"></div>
        <div class="light x2"></div>
        <div class="light x3"></div>
        <div class="light x4"></div>
        <div class="light x5"></div>
        <div class="light x6"></div>
        <div class="light x7"></div>
        <div class="light x8"></div>
        <div class="light x9"></div>
      </div>
      <Grid style={{width:"80%"}} container justifyContent='center' alignItems="center" direction='column'>
        <Typography variant="h1">
          {translate.hi} <spam className={classes.nameText}>{translate.name}</spam>
          {translate.hi2}
        </Typography>
        <Typography variant="subtitle1">
          {translate.desc}
        </Typography>
        <div className={classes.divIcons}>
          <IconButton
  
            color="secondary"
            className={classes.iconButtonStyle}
          >
            <Telegram />
          </IconButton>
          <IconButton
            color="secondary"
            className={classes.iconButtonStyle}
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            color="secondary"
            className={classes.iconButtonStyle}
          >
            <Instagram />
          </IconButton>
        </div>
      </Grid>
    </div>
  );
}
