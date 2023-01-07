import React from "react";
import { StylesProvider, ThemeProvider, jssPreset } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import IndexScreen from "./screen/index";
import theme from "./theme/theme";
import { create } from "jss";
import rtl from "jss-rtl";
import { getDirection } from "./localization";
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function App() {
  return getDirection === "ltr" ? (
    <>
      <ThemeProvider theme={theme}>
        <StylesProvider />
        <CssBaseline />
        <IndexScreen />
      </ThemeProvider>
    </>
  ) : (
    <ThemeProvider theme={theme}>
      <StylesProvider jss={jss} />
      <CssBaseline />
      <IndexScreen />
    </ThemeProvider>
  );
}

export default App;
