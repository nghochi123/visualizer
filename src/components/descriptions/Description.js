import React from "react";

import {
    Typography,
    Table,
    TableCell,
    TableContainer,
    TableRow,
} from "@material-ui/core";

import * as styles from "./description.module.css";

export const Description = ({ description }) => {
    return (
        <div>
            <Typography variant="h2">{description.header}</Typography>
            <hr />
            <Typography>{description.description}</Typography>
            <br />
            <Typography variant="h4">Big O</Typography>
            <TableContainer>
                <Table>
                    <TableRow>
                        <TableCell>Worst Case Time Complexity</TableCell>
                        <TableCell align="right">
                            {description.worsttime}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Best Case Time Complexity</TableCell>
                        <TableCell align="right">
                            {description.besttime}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Average Time Complexity</TableCell>
                        <TableCell align="right">
                            {description.averagetime}
                        </TableCell>
                    </TableRow>
                </Table>
            </TableContainer>
        </div>
    );
};

export const Legend = ({ description }) => {
    let colours = {
        yellow: styles.boxyellow,
        green: styles.boxgreen,
        blue: styles.boxblue,
        red: styles.boxred,
    };
    return (
        <div
            style={{
                margin: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {Object.entries(description.legend).map((value, idx) => {
                return (
                    <React.Fragment key={idx}>
                        <div className={colours[value[0]]}></div>
                        <p>{value[1]}</p>
                    </React.Fragment>
                );
            })}
        </div>
    );
};
