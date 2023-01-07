import React from "react";
import Portfolios from "../components/portfolios";
import { Grid, makeStyles } from "@material-ui/core";
import Title from "../components/title";
import { getTranslates } from "../localization";
import imageOne from '../assets/images/1.jpg'
import  imageTow from  '../assets/images/2.jpeg'
import  imageThere from  '../assets/images/3.jpg'
import  imageFore from  '../assets/images/4.jpg'
import  imageSix from  '../assets/images/6.jpg'


const useStyle = makeStyles((theme) => ({
  root: {
    minHeight:'100vh',
    padding:30,
    paddingTop:60,
    width:'100%',
    [theme.breakpoints.down('xs')]:{
      paddingRight:10,
      paddingLeft:10,
    }

  },
}));
export default function PortfoliosScreen() {
  const classes = useStyle();
  const translate = getTranslates();
  const portfolios = [
    {
      id: 1,
      title: "react developer",
      desc: "react",
      image: imageOne,
    },
    {
      id: 2,
      title: "react developer",
      desc: "react",
      image:imageTow,
    },
    {
      id: 3,
      title: "react developer",
      desc: "react",
      image:imageThere,
    },
    {
      id: 4,
      title: "react developer",
      desc: "react",
      image: imageFore,
    },
    {
      id: 5,
      title: "react developer",
      desc: "react",
      image:imageOne,
    },
    {
      id:6,
      title: "react developer",
      desc: "react",
      image:imageSix,
    },
  ];
  return (
    <div className={classes.root}>
      <Title title={translate.portfolios} />
      <Grid
        container
        item={12}
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        {portfolios.map((portfolio) => (
          <Portfolios
            key={portfolio.id}
            title={portfolio.title}
            desc={portfolio.desc}
            href="http://reactdeveloper.ir"
            image={portfolio.image}
          />
        ))}
      </Grid>
    </div>
  );
}
