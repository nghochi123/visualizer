import React, { useContext } from "react";
import { Container } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { GlobalStateContext } from "../../context/GlobalContextProvider";

import * as styles from "./Layout.module.css";

const Layout = (props) => {
  const state = useContext(GlobalStateContext);
  const classname = state.darkMode ? styles.darkMode : styles.normal;
  const theme = createMuiTheme({
    palette: { type: state.darkMode ? "dark" : "light" },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className={classname}>
        <Container maxWidth="lg">
          <div style={{ minHeight: "94vh" }}>
            <Header />
            {props.children}
          </div>
          <Footer />
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
