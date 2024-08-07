import React, { useContext } from "react";
import { Grid, Switch, Button } from "@material-ui/core";

import {
    GlobalStateContext,
    GlobalDispatchContext,
} from "../../context/GlobalContextProvider";

import * as styles from "./Header.module.css";

const Header = (props) => {
    const state = useContext(GlobalStateContext);
    const dispatch = useContext(GlobalDispatchContext);
    return (
        <header className={styles.header}>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={6}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <p
                            className={styles.toptext}
                            style={{ fontSize: "1.5rem" }}
                        >
                            Visualisation
                        </p>
                        <Button
                            onClick={() =>
                                dispatch({
                                    type: "SET_PAGE_TYPE",
                                    payload: "A",
                                })
                            }
                            disabled={state.pageType === "A"}
                        >
                            Algo
                        </Button>
                        <Button
                            onClick={() =>
                                dispatch({
                                    type: "SET_PAGE_TYPE",
                                    payload: "P",
                                })
                            }
                            disabled={state.pageType !== "A"}
                        >
                            Path
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div>
                        <p className={styles.mleft}>
                            Dark Mode
                            <Switch
                                checked={state.darkMode}
                                onChange={() =>
                                    dispatch({ type: "TOGGLE_THEME" })
                                }
                                inputProps={{
                                    "aria-label": "primary checkbox",
                                }}
                                color="primary"
                            />
                        </p>
                    </div>
                </Grid>
            </Grid>
            <nav></nav>
        </header>
    );
};

export default Header;
