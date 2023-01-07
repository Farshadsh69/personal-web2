import { Grid, Typography, Modal } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core";



import imageOne from '../assets/images/1.jpg'
const useStyles = makeStyles((theme) => ({
  root: {
    padding: 15,
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
  },
  image: {
    width: "90%",
    cursor: "pointer",
    "&:hover": {
      transform: " skewY(20deg)",
      transition: ".4s",
    },
  },
  title: {
    textAlign: "center",
    cursor: "pointer",
    "& a": {
      textDecoration:'none',
      color: "#fff",
      transition: ".4s",
    },
    "& :hover": {
      color: theme.palette.primary.main,
      transition: ".4s",
    },
  
  },
  desc: {
    textAlign: "center",
  },
  modalImage: {
    width: "100%",
    height: "100%",
  },
  modal: {
    width: "60%",
    height: "60%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 60,
    [theme.breakpoints.down('xs')]:{
      with:'90%',
      height:'50%',
    }
  },
}));
export default function Portfolios({ title, image, desc, href }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <>
      <Grid item lg={4} className={classes.root}>
        <img
          className={classes.image}
          src={image}
          alt={title}
          onClick={() => setOpen(true)}
        />
        <Typography className={classes.title} variant="h5">
          <a href={href}>{title}</a>
        </Typography>
        <Typography className={classes.desc} variant="body1">
          {desc}
        </Typography>
      </Grid>
      <Modal
        className={classes.modal}
        open={open}
        onClose={() => setOpen(false)}
      >
        <img className={classes.modalImage} src={image} alt={title} />
      </Modal>
    </>
  );
}
