import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Typography, TextField } from "@material-ui/core";
import Title from "../components/title";
import Contact  from "../components/contact";
import CallIcon from "@material-ui/icons/CallOutlined"
import EmailIcon from "@material-ui/icons/EmailOutlined"
import RoomIcon from "@material-ui/icons/RoomOutlined"

import { getTranslates, getDirection } from "../localization/index";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
  },
  contactGrid: {
    paddingTop: 60,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 60,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 5,
      paddingRight: 5,
    },
  },
  FormGrid: {
    padding: 5,
  },
  iconStyle: {
    fontSize:30,
  },
  
}));
export default function ContactScreen() {
  const classes = useStyles();
  const translate = getTranslates();
  return (
    <Grid container alignItems="flex-start" className={classes.root}>
      <Grid container item className={classes.contactGrid} xs={12}>
        <Title title={translate.contactMe} />
        <Grid container direction="row">
          <Grid item xs={12} md={6} className={classes.FormGrid}>
            <Typography className={classes.getInTouch} variant="h4">
              Get In Touch
            </Typography>
            <TextField
              style={{ marginTop: 25, border: "1px solid #2e344e" }}
              size="medium"
              fullWidth
              variant="outlined"
              required
              label="Enter your name"
            />
            <TextField
              style={{ marginTop: 25, border: "1px solid #2e344e" }}
              size="medium"
              fullWidth
              variant="outlined"
              required
              label="Enter your email"
            />
            <TextField
              style={{ marginTop: 25, border: "1px solid #2e344e" }}
              size="medium"
              fullWidth
              variant="outlined"
              required
              label="Enter your subject"
            />
            <TextField
              style={{ marginTop: 25, border: "1px solid #2e344e" }}
              size="medium"
              fullWidth
              variant="outlined"
              required
              label="Enter your massage"
              multiline={true}
              rows={6}
            />
            <Button
              color="primary"
              variant="contained"
              size="large"
              style={{ marginTop: 25, display: "flex" }}
            >
              Send Massage
            </Button>
          </Grid>
          <Grid
            item
            className={classes.FormGrid}
            xs={12}
            md={6}
            style={{ paddingLeft: 15, paddingRight: 15 }}
          >
<Contact  icon={<CallIcon  className={classes.iconStyle} />} title='Phone' text1='(+98)9350783233' text2='(+98)9189173524'/>
<Contact icon={<EmailIcon className={classes.iconStyle}/>} title='Email' text1='farshadshabani69@gmail.com' text2='farshadshabani1369@gmail.com'  />
<Contact icon={<RoomIcon  className={classes.iconStyle} />} title='Phone' text1='(+98)9350783233' text2='(+98)9189173524'/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
