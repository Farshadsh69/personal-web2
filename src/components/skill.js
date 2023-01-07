import React, { useState, useEffect } from "react";
import {  makeStyles } from "@material-ui/core";
import { Typography, LinearProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  ProgressDiv: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  progress: {
    width: "90%",
    marginLeft: 15,
    height: 6,
    backgroundColor: "#2e344e",
  },
}));
export default function Skill({value,title}) {
  const [val, setVal] = useState(40);
  const classes = useStyles();

  useEffect(() => {
    setTimeout(() => {
      if (val === value ){
        return;
      }
      setVal((val) => val + 1);
    }, 20);
  }, [val]);

  return (
    <div className={classes.root}>
      <Typography variant="h6">{title}</Typography>
      <div className={classes.ProgressDiv}>
        <Typography variant="body1">{value}%</Typography>
        <LinearProgress
          className={classes.progress}
          value={val}
          variant="determinate"
          color="primary"
        ></LinearProgress>
      </div>
    </div>
  );
}
