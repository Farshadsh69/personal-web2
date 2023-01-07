import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { getDirection } from "../localization";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    marginBottom: 60,
    height: 75,
    width: "100%",
  },
  title: {
    textAlign: getDirection() === "ltr" ? "left" : "right",
    "&::after": {
      position: "absolute",
      content: "''",
      right: getDirection() === "rtl" ? 0 : "",
      left: getDirection() === "ltr" ? 0 : "",

      top: "auto",
      bottom: 0,
      height: 5,
      borderRadius: 100,
      width: 35,
      background: "#037fff",
    },
    "&::before": {
      position: "absolute",

      content: "''",
      right: getDirection() === "rtl" ? 0 : "",
      left: getDirection() === "ltr" ? 0 : "",
      top: "auto",
      bottom: 0,
      height: 5,
      borderRadius: 100,
      width: 100,
      background: "rgba(3,27,255,0.3)",
    },
  },
  subtitle: {
    fontSize: "4.5rem",
    position: "absolute",
    right: getDirection() === "rtl" ? 15 : "",
    left: getDirection() === "ltr" ? 15 : "",
    top: "100%",
    lineHeight: "1rem",
    fontHight: 900,
    color: "rgba(25,29,43,44)",
    display: "inline-block",
    zIndex: -1,
    transform: "translateY(-40%)",
  },
}));
export default function Title({ title }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.title}>
        {title}
      </Typography>
      <span className={classes.subtitle}>{title}</span>
    </div>
  );
}
