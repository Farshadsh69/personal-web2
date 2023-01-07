import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Step from "@material-ui/core/Step";
import Stepper from "@material-ui/core/Stepper";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import { Hidden, StepConnector, Typography } from "@material-ui/core";
import  "./mystepper.css";
import { getDirection } from "../localization/index";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  StepConnector: {
    display:'flex',
    paddingBottom: 0,
    marginRight:14,
    "& span": {
      borderLeft: "3px solid #2e344e",
      marginRight:14
    },
  },
  StepContent: {
    borderLeft: "3px solid #2e344e",
    marginTop: 0,
  },
  divContent: {
    display: "flex",
    flexDirection: "row",
    padding: 15,
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    border: "5px solid #2e344e",
    marginLeft: 5,
    [theme.breakpoints.down('xs')]:{
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'flex-start'
    }
  
  },
  label: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    color: theme.palette.primary.main,
    [theme.breakpoints.down('xs')]:{
    fontSize:18,
    }
  },
  line: {
    width: 30,
    height: 1,
    backgroundColor: "#2e344e",
    marginRight:getDirection()==="ltr"?10:0,
    marginLeft:getDirection()==="rtl"?10:0,


  },
  date: {
    width: getDirection() === "ltr" ? 136 : 110,
    textAlign: getDirection() === "ltr" ? "left" : "right",
  },
  StepLabel: {},
  TypographySub: {
    textAlign: getDirection() === "ltr" ? "left" : "right",
  },
  divWidth:{
    width:158,
  }
}));

export default function MyStepper() {
  const classes = useStyles();
  const steps = [
    { id: -1, data: "", title: "", subtitle: "", content: "" },
    {
      id: 0,
      data: "2018-2019",
      title: "master of science",
      subtitle: "Abc university",
      content:
        "Laboriosam quaerat sapiente minima nam minus similique illum architecto et!Laboriosam quaerat sapiente minima nam minus similique illum architecto et!",
    },
    {
      id: 1,
      data: "2018-2019",
      title: "master of science",
      subtitle: "Abc university",
      content:
        "Laboriosam quaerat sapiente minima nam minus similique illum architecto et!Laboriosam quaerat sapiente minima nam minus similique illum architecto et!",
    },
    { id: -2, data: "", title: "", subtitle: "", content: "" },
  ];

  return (
    <div className={classes.root}>
      <Stepper
        orientation="vertical"
        connector={<StepConnector className={classes.StepConnector} />}
        style={{ backgroundColor: "transparent" }}
      >
        {steps.map((step) =>
          step.id >= 0 ? (
            <Step active={true} key={step.id}>
              <StepLabel
                classes={{ label: classes.label }}
                className={classes.StepLabel}
                icon={<span className={classes.circle} />}
              >
                <Typography className={classes.date} variant="h6">
                  {step.data}
                </Typography>
                <Hidden xsDown>
                <span className={classes.line}></span>
                </Hidden>
                <Typography className={classes.title} variant="h5">
                  {step.title}
                </Typography>
              </StepLabel>
              <StepContent className={classes.StepContent}>
                <div className={classes.divContent}>
                  <Hidden xsDown>
                  <div className={classes.divWidth}></div>
                  </Hidden>
                  <div style={{flex:1}}>
                    <Typography variant="h6" className={classes.TypographySub}>
                      {step.subtitle}
                    </Typography>
                    <Typography variant="body1">{step.content}</Typography>
                  </div>
                </div>
              </StepContent>
            </Step>
          ) : step.id === -1 ? (
            <Step active={true} key={step.id}>
              <StepLabel icon={null}></StepLabel>
            </Step>
          ) : null
        )}
      </Stepper>
    </div>
  );
}
