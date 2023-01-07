import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 20,
  },
  main: {
    backgroundColor: "#191d2b",
    zIndex: 1,
    borderTop: "5px solid #2e344e",
    border: "1px solid #2e344e",
    padding: theme.spacing(8),
    transition: "0.4s",
    "&:hover": {
      borderTopColor: theme.palette.primary.main,
      transition: "0.4s",
    },
  },
  title:{
     marginTop:50,
      paddingBottom:10,
      position:'relative',
      "&::before":{
          content:"''",
          position:'absolute',
          left:0,
          top:"auto",
          bottom:0,
          height:2,
          width:50,
         marginBottom:10,
          background:'#2e344e'
      }
  }

}));
export default function Services({ title, desc, icon }) {
  const classes = useStyles();
  return (
    <Grid item lg={4} md={6} xs={12} className={classes.root}>
      <Grid
        container
        className={classes.main}
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        {icon}
        <Typography className={classes.title} variant="h5">
          {title}
        </Typography>
        <Typography className={classes.desc} variant="body1">
          {desc}
        </Typography>
      </Grid>
    </Grid>
  );
}
