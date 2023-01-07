import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
  width:"100%"
  },
  main: {
    backgroundColor: "#191d2b",
    zIndex: 1,
    marginBottom:20,
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
    textAlign:'left'
  },
  desc:{
      cursor:'pointer',
      transition:'1s',
      "&:hover":{
          color:theme.palette.primary.main,
          transition:'.4s',      }
  },
  divIcon:{
      margin:10,
      padding:10,
      paddingBottom:5,
      border:'1px solid #2e334e',
      marginRight:25
  },
  divDetails:{
      flex:1,
      display:'flex',
      flexDirection:'column',
      textAlign:'left'
}


}));
export default function Contact({ title,text1,text2, icon }) {
  const classes = useStyles();
  return (
   <div className={classes.root}>
       <Grid  className={classes.main} container direction='row' justifyContent='flex-start' alignItems='center'>
           <div className={classes.divIcon}>
               {icon}
           </div>
           <div className={classes.divDetails}>
<Typography className={classes.title} variant='h6'>{title}</Typography>
<Typography className={classes.desc} variant='body1'>{text1}</Typography>
<Typography className={classes.desc} variant='body1'>{text2}</Typography>

           </div>

       </Grid>

   </div>
  );
}
