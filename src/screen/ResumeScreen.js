import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import Title from "../components/title";
import { getTranslates, getDirection } from "../localization/index";
import Skill from "../components/skill";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import MyStepper from "../components/MyStepper.js";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",

  },
  skillGrid: {
    paddingTop: 60,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 60,
    [theme.breakpoints.down('xs')]:{
      paddingRight:5,
      paddingLeft:5
    }

  
  },
  nameText: {
    color: theme.palette.primary.main,
    [theme.breakpoints.down("xs")]: {
      display: getDirection() === "ltr" ? "block" : "null",
    },
  },
  aboutTextGrid: {
    paddingLeft: 20,
    paddingRight: 20,
    [theme.breakpoints.down("xs")]: {
      padding: 0,
      marginTop: 15,
      marginBottom: 15,
    },
  },
  iconStyle: {
    fontSize: 50,
    color: theme.palette.primary.main,
  },
  Typography:{
    margin:10
  }
}));
export default function ResumeScreen() {
  const classes = useStyles();
  const translate = getTranslates();
  return (
    <Grid
      container
      justifyContent="flex-start"
      alignItems="flex-start"
      className={classes.root}
    >
      <Grid container item className={classes.skillGrid} xs={12}>
        <Title title={translate.myskills} />
      </Grid>
      <Grid
        justifyContent="flex-start"
        alignItems="flex-start"
        container
        direction="row"
      >
        <Grid item xs={12} md={6} className={classes.ImageGrid}>
          <Skill value={80} title={translate.HTML5} />
          <Skill value={60} title={translate.JAVASCRIPT} />
          <Skill value={50} title={translate.REACTJS} />
        </Grid>
        <Grid
          item
          className={classes.aboutTextGrid}
          xs={12}
          md={6}
          style={{ paddingLeft: 15, paddingRight: 15 }}
        >
          <Skill value={42} title={translate.NODEJS} />
          <Skill value={70} title={translate.REACTNATIVE} />
          <Skill value={69} title={translate.CSS} />
        </Grid>
      </Grid>
      <Grid container item className={classes.aboutGrid} xs={12}>
        <Title title={translate.resume} />
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <BusinessCenterIcon style={{ fontSize: 34 }} />
          <Typography variant="h4"className={classes.Typography}>
            Working Experience
          </Typography>
        </Grid>
        <Grid container style={{ marginTop: 15, marginBottom: 15 }}>
          <MyStepper></MyStepper>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <LocalLibraryIcon style={{ fontSize: 34 }} />
          <Typography variant="h4" className={classes.Typography}>
            Educational Qualifications
          </Typography>
        </Grid>
        <Grid container  style={{ marginTop: 15, marginBottom: 15 }}>
          <MyStepper></MyStepper>
        </Grid>
      </Grid>
    </Grid>
  );
}
