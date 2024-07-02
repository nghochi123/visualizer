import React, { useState, useEffect, useRef } from "react";
import {
    Button,
    Typography,
    Slider,
    Grid,
    Table,
    TableCell,
    TableContainer,
    TableRow,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
} from "@material-ui/core";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";
import PathBox from "../../components/PathBox/PathBox";
import generateMaze from "../../helperfunctions/mazegen";
import * as styles from "./PathFinding.module.css";
import mazeConstants from "../../constants/maze";
import ucs from "../../algos/pathing/ucs";
import dfs from "../../algos/pathing/dfs";
import astar from "../../algos/pathing/astar";
import greedy from "../../algos/pathing/greedy";

import {
    ucsDescription,
    dfsDescription,
    greedyDescription,
    astarDescription,
} from "../../constants/searchdescriptions";

const PathFinderLegend = () => {
    return (
        <div
            style={{
                margin: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div className={`${styles.box} ${styles.boxyellow}`}></div>
            <p className={styles.textyellow}>Start</p>
            <div className={`${styles.box} ${styles.boxred}`}></div>
            <p className={styles.textred}>End</p>
            <div className={`${styles.box} ${styles.boxdarkblue}`}></div>
            <p className={styles.textdarkblue}>Wall</p>
            <div className={`${styles.box} ${styles.boxblue}`}></div>
            <p className={styles.textblue}>Visited</p>
            <div className={`${styles.box} ${styles.boxgreen}`}></div>
            <p className={styles.textgreen}>Unvisited</p>
            <div className={`${styles.box} ${styles.boxorange}`}></div>
            <p className={styles.textorange}>Path</p>
        </div>
    );
};

export default function PathFinding() {
    const table = [];
    for (let i = 0; i < mazeConstants.ROWS; i++) {
        const row = [];
        for (let j = 0; j < mazeConstants.COLS; j++) {
            row.push(false);
        }
        table.push(row);
    }
    const algorithm = useRef(null);
    const [mode, setMode] = useState(0);
    const [layout, setLayout] = useState([]);
    const [isPathing, setIsPathing] = useState(false);
    const [radioValue, setRadioValue] = useState("ucs");
    const [path, setPath] = useState(table);
    const [openness, setOpenness] = useState(0.4);
    const handleSliderChange = (e, val) => {
        setOpenness(val);
    };
    const resetPath = () => {
        const p = [];
        for (let i = 0; i < mazeConstants.ROWS; i++) {
            const row = [];
            for (let j = 0; j < mazeConstants.COLS; j++) {
                row.push(false);
            }
            p.push(row);
        }
        setPath(p);
    };
    useEffect(() => {
        setLayout(
            generateMaze(mazeConstants.COLS, mazeConstants.ROWS, openness)
        );
    }, [openness]);
    const resetWalls = () => {
        setLayout(
            generateMaze(mazeConstants.COLS, mazeConstants.ROWS, openness)
        );
        resetPath();
    };
    const handleModeChange = (event, newMode) => {
        if (newMode !== null) setMode(newMode);
    };

    let description = ucsDescription;
    switch (radioValue) {
        case "ucs":
            algorithm.current = ucs;
            description = ucsDescription;
            break;
        case "dfs":
            algorithm.current = dfs;
            description = dfsDescription;
            break;
        case "greedy":
            algorithm.current = greedy;
            description = greedyDescription;
            break;
        case "astar":
            algorithm.current = astar;
            description = astarDescription;
            break;
        default:
            algorithm.current = ucs;
    }
    const radioHandler = (e) => {
        setRadioValue(e.target.value);
    };

    return (
        <div>
            <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent="center"
            >
                <Grid item>
                    <ToggleButtonGroup
                        value={mode}
                        exclusive
                        onChange={handleModeChange}
                        style={{ margin: mazeConstants.ROWS }}
                        className={styles.pathsettings}
                    >
                        <ToggleButton disabled={isPathing} value={0}>
                            Set Start
                        </ToggleButton>
                        <ToggleButton disabled={isPathing} value={1}>
                            Set End
                        </ToggleButton>
                        <ToggleButton disabled={isPathing} value={2}>
                            Set Walls
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Grid>
                <Grid item>
                    <Button
                        style={{ marginLeft: 30 }}
                        disabled={isPathing}
                        onClick={resetWalls}
                        variant="outlined"
                    >
                        Reset
                    </Button>
                </Grid>
                <Grid
                    item
                    style={{ width: 400, marginLeft: 30 }}
                    className={styles.pathsettings}
                >
                    <Typography gutterBottom>Openness</Typography>
                    <Slider
                        min={0.2}
                        max={1}
                        step={0.01}
                        marks
                        value={openness ? openness : 0.4}
                        onChange={handleSliderChange}
                    />
                </Grid>
            </Grid>
            <PathFinderLegend />
            <PathBox
                mode={mode}
                layout={layout}
                setLayout={setLayout}
                isPathing={isPathing}
                setIsPathing={setIsPathing}
                path={path}
                setPath={setPath}
                algorithm={algorithm}
            />
            <Grid
                container
                spacing={1}
                style={{
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Grid item xs={6} sm={4}>
                    <FormControl disabled={isPathing} component="fieldset">
                        <FormLabel component="legend">
                            Search Algorithm
                        </FormLabel>
                        <RadioGroup
                            aria-label="algorithm"
                            name="algorithm"
                            value={radioValue}
                            onChange={radioHandler}
                        >
                            <FormControlLabel
                                value="ucs"
                                control={<Radio />}
                                label="UCS"
                            />
                            <FormControlLabel
                                value="dfs"
                                control={<Radio />}
                                label="DFS"
                            />
                            <FormControlLabel
                                value="greedy"
                                control={<Radio />}
                                label="Greedy"
                            />
                            <FormControlLabel
                                value="astar"
                                control={<Radio />}
                                label="A*"
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Typography
                        variant="h3"
                        style={{ display: "flex", justifyContent: "center" }}
                    >
                        {description.header}
                    </Typography>
                    <hr />
                    <Typography variant="body1">
                        {description.description}
                    </Typography>
                    <Typography variant="body1">
                        To use the path finder, set up your start and end point.
                        The default is at the top left and bottom right
                        respectively. Click on reset to reset the path and
                        generate a new maze.
                    </Typography>
                    <Typography variant="body1">
                        Openness refers to how sparse the walls on the maze are.
                        The more open the maze is, the less walls there are. Not
                        all mazes generated are solvable.
                    </Typography>
                    <TableContainer>
                        <Table>
                            <TableRow>
                                <TableCell>Time Complexity</TableCell>
                                <TableCell align="right">
                                    {description.time}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Optimal</TableCell>
                                <TableCell align="right">
                                    {description.optimal}
                                </TableCell>
                            </TableRow>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </div>
    );
}
