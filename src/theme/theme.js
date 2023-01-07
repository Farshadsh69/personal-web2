import { createTheme } from "@material-ui/core/styles";
import palette from "./palette";
import { getDirection, getFonts } from "../localization/index";
const theme = createTheme({
  palette: palette,
  direction: getDirection(),
  spacing: 2.5,
  typography: {
    h1: {
      fontWeight: 700,
      fontSize: getDirection()==="rtl"?50:52,
      lineHeight: "4rem",
      fontFamily: getFonts(),
    },
    h2: {
      fontWeight: 700,
      fontSize: getDirection()==="rtl"?38:40,
      lineHeight: "3.2857rem",
      fontFamily: getFonts(),
      color:"#fff",
    },

    h3: {
      fontWeight: 600,
      fontSize: getDirection()==="rtl"?30:32,
      lineHeight: "2.7rem",
      fontFamily: getFonts(),
      color:'#fff',
    },
    h4: {
      fontWeight: 600,
      fontSize: getDirection()==="rtl"?26:28,
      lineHeight: "1.857rem",
      fontFamily: getFonts(),
    },
    h5: {
      fontWeight: 600,
      fontSize: getDirection()==="rtl"?21:23,
      lineHeight: "2.14rem",
      fontFamily: getFonts(),
    },
    h6: {
      fontWeight: 600,
      fontSize: getDirection()==="rtl"?16:18,
      lineHeight: "1.857rem",
      fontFamily: getFonts(),
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: getDirection()==="rtl"?18:20,
      lineHeight: "2rem",
      fontFamily: getFonts(),
      margin: 15,
    },
  
  subtitle2: {},
  body1: {
    fontWeight: 400,
    fontSize: getDirection()==="rtl"?18:18,
    lineHeight: "1.8rem",
    color: "#a4acc4",
    fontFamily: getFonts(),
    textAlign:getDirection()==="rtl"?"justify":"left",


  },
  body2: {
    fontWeight: 600,
    fontSize: getDirection()==="rtl"?17:16,
    lineHeight: "1.8rem",
    color: "#a4acc4",
    fontFamily: getFonts(),
  },
  button: {
    fontWeight:10,
    fontSize: getDirection()==="rtl"?12:14,
    color: "#a4acc4",
    fontFamily: getFonts(),
    letterSpacing: 1,
    textAlign:"center"
  },
 }
});
export default theme;
