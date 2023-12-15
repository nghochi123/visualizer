import React, { useContext } from "react";
import { Container, Grid, Link } from "@material-ui/core";

import { GlobalStateContext } from "../../context/GlobalContextProvider";

import * as styles from "./Footer.module.css";

const Footer = (props) => {
    const state = useContext(GlobalStateContext);
    const theme = state.darkMode ? "secondary" : "primary";
    return (
        <Container style={{ marginTop: 20 }}>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
            >
                <Grid item xs={6}>
                    <p className={styles.smallerscreen}>
                        {new Date().getFullYear()}
                    </p>
                </Grid>
                <Grid item xs={6} style={{ textAlign: "right" }}>
                    <Link
                        className={styles.smallerscreen}
                        color={theme}
                        href="https://github.com/nghochi123/visualizer"
                    >
                        Source Code
                    </Link>
                    <Link
                        className={styles.smallerscreen}
                        color={theme}
                        href="https://visualgo.net/en"
                        style={{ marginLeft: "10px" }}
                    >
                        Inspiration
                    </Link>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Footer;
