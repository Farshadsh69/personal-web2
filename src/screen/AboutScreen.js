import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Typography } from "@material-ui/core";
import Title from "../components/title";
import { getTranslates, getDirection } from "../localization/index";
import MainImage from "../assets/images/main.jpg";
import Services from "../components/services";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import CodeIcon from "@material-ui/icons/Code";
import WebIcon from "@material-ui/icons/Web";
import Modal from '@material-ui/core/Modal';


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
  },
  aboutGrid: {
    paddingTop: 60,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 60,
  },
  mainImage: {
    width: "100%",
    height: "100%",
  },
  ImageGrid: {
    position: "relative",
    zIndex: 1,
    height: 400,
    "&::after": {
      content: "''",
      position: "absolute",
      top: "auto",
      bottom: 0,
      right: 0,
      height: "65%",
      width: 10,
      background: "rgba(3,127,255,0.6)",
    },
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      height: "65%",
      width: 10,
      background: "rgba(3,127,255,0.6)",
    },
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
}));
export default function AboutScreen() {
  const classes = useStyles();
  const translate = getTranslates();
  return (
    <Grid
      container
      justifyContent="flex-start"
      alignItems="flex-start"
      className={classes.root}
    >
      <Grid container item className={classes.aboutGrid} xs={12}>
        <Title title={translate.aboutMe} />
      </Grid>
      <Grid
        justifyContent="flex-start"
        alignItems="flex-start"
        container
        direction="row"
      >
        <Grid item xs={12} md={6} className={classes.ImageGrid}>
          <img
            className={classes.mainImage}
            src={MainImage}
            alt={translate.name}
          />
        </Grid>
        <Grid
          item
          className={classes.aboutTextGrid}
          xs={12}
          md={6}
          style={{ paddingLeft: 15, paddingRight: 15 }}
        >
          <Typography variant="h3">
            {translate.hi}
            <span className={classes.nameText}>{translate.name}</span>
            {translate.hi2}
          </Typography>
          <Typography variant="subtitle1">{translate.desc}</Typography>
          <Typography variant="body1" style={{ marginTop: 10 }}>
            <b style={{ minWidth: "100%" }}>{translate.FullName}</b>
            {" : "}
            {translate.name}
          </Typography>
          <Typography variant="body1" style={{ marginTop: 10 }}>
            <b style={{ minWidth: "100%" }}>{translate.Age}</b>
            {" : "}
            {30}
          </Typography>
          <Typography variant="body1" style={{ marginTop: 10 }}>
            <b style={{ minWidth: "100%" }}>{translate.languages}</b>
            {" : "}
            {translate.languages1}
          </Typography>{" "}
          <Typography variant="body1" style={{ marginTop: 10 }}>
            <b style={{ minWidth: "100%" }}>{translate.nationality}</b>
            {" : "}
            {translate.nationality1}
          </Typography>
          <Typography variant="body1" style={{ marginTop: 10 }}>
            <b style={{ minWidth: "100%" }}>{translate.phone}</b>
            {" : "}
            <samp>
              {getDirection() === "rtl" ? "09350783233" : "+98 9350783233"}{" "}
            </samp>
          </Typography>
          <Button style={{ marginTop: 25 }} variant="contained" color="primary" onClick={<Modal>HI</Modal>}>
            {translate.downloadcv}
          </Button>
        </Grid>
      </Grid>
      <Grid container item className={classes.aboutGrid} xs={12}>
        <Title title={translate.services} />
    
      <Grid container direction="row">
        <Services
          icon={<WebIcon className={classes.iconStyle} />}
          title={translate.WebDesign}
          desc={translate.descservic}
        />
        <Services
          icon={<CodeIcon className={classes.iconStyle} />}
          title={translate.WebDevelopment}
          desc={translate.descservic}
        />
        <Services
          icon={<PhoneAndroidIcon className={classes.iconStyle} />}
          title={translate.MobileApplication}
          desc={translate.descservic}
        />
      </Grid>
      </Grid>
    </Grid>
  );
}
