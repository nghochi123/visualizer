import React, { useState, useContext } from "react";
import {
    Button,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    Grid,
    InputLabel,
    Select,
    MenuItem,
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";

import Bar from "./Bar/Bar";
import bubblesort from "../../algos/sorting/bubblesort";
import selectionsort from "../../algos/sorting/selectionsort";
import insertionsort from "../../algos/sorting/insertionsort";
import quicksort from "../../algos/sorting/quicksort";
import bogosort from "../../algos/sorting/bogosort";
import { GlobalStateContext } from "../../context/GlobalContextProvider";
import { Description, Legend } from "../descriptions/Description";
import {
    bubbleSortDescription,
    selectionSortDescription,
    insertionSortDescription,
    quickSortDescription,
    bogoSortDescription,
} from "../../constants/sortdescriptions";

import randomize from "../../helperfunctions/randomize";

import * as styles from "./SortingVisualBox.module.css";

const VisualBox = (props) => {
    const state = useContext(GlobalStateContext);
    const theme = state.darkMode
        ? createTheme({ palette: { type: "dark" } })
        : createTheme({ palette: { type: "light" } });
    const [radioValue, setRadioValue] = useState("bubble");
    const [size, setSize] = useState(10);
    const [delay, setDelay] = useState(200);
    const [sorting, setSorting] = useState(false);
    let tempArray = [];
    for (let i = size; i > 0; i--) {
        tempArray.push(i);
    }
    let [array, setArray] = useState(tempArray);
    let max = array.length + 1;
    let width = 1100 / array.length;
    let [bars, setBars] = useState(
        array.map((i) => {
            let height = (i / max) * 300;
            return (
                <Bar
                    key={i}
                    height={`${height}px`}
                    width={`${width}px`}
                    value={i}
                />
            );
        })
    );
    let algorithm = bubblesort;
    let description = bubbleSortDescription;
    switch (radioValue) {
        case "bubble":
            algorithm = bubblesort;
            description = bubbleSortDescription;
            break;
        case "selection":
            algorithm = selectionsort;
            description = selectionSortDescription;
            break;
        case "insertion":
            algorithm = insertionsort;
            description = insertionSortDescription;
            break;
        case "quick":
            algorithm = quicksort;
            description = quickSortDescription;
            break;
        case "bogo":
            algorithm = bogosort;
            description = bogoSortDescription;
            break;
        default:
            algorithm = bubblesort;
    }
    const radioHandler = (e) => {
        setRadioValue(e.target.value);
    };
    const sizeHandler = (e) => {
        setSize(e.target.value);
        randomize(e.target.value, setArray, setBars, 1100 / e.target.value);
    };
    const delayHandler = (e) => {
        setDelay(e.target.value);
    };
    return (
        <>
            <div className={styles.box}>{bars}</div>
            <div className={styles.bottom}>
                <Button
                    disabled={sorting}
                    className={styles.button}
                    variant="outlined"
                    onClick={() =>
                        algorithm(
                            array,
                            setArray,
                            setBars,
                            width,
                            delay,
                            setSorting
                        )
                    }
                >
                    Sort
                </Button>
                <Button
                    disabled={sorting}
                    className={styles.button}
                    variant="outlined"
                    onClick={() => randomize(size, setArray, setBars, width)}
                >
                    Randomize
                </Button>
            </div>
            <Legend description={description} />
            <ThemeProvider theme={theme}>
                <Grid container spacing={1}>
                    <Grid item xs={6} sm={4}>
                        <FormControl disabled={sorting} component="fieldset">
                            <FormLabel component="legend">
                                Sorting Algorithm
                            </FormLabel>
                            <RadioGroup
                                aria-label="algorithm"
                                name="algorithm"
                                value={radioValue}
                                onChange={radioHandler}
                            >
                                <FormControlLabel
                                    value="bubble"
                                    control={<Radio />}
                                    label="Bubble Sort"
                                />
                                <FormControlLabel
                                    value="selection"
                                    control={<Radio />}
                                    label="Selection Sort"
                                />
                                <FormControlLabel
                                    value="insertion"
                                    control={<Radio />}
                                    label="Insertion Sort"
                                />
                                <FormControlLabel
                                    value="quick"
                                    control={<Radio />}
                                    label="Quicksort"
                                />
                                <FormControlLabel
                                    value="bogo"
                                    control={<Radio />}
                                    label="Bogosort"
                                />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <FormControl
                            disabled={sorting}
                            style={{ width: "80%", marginBottom: "15px" }}
                        >
                            <InputLabel id="itemnumber-label">
                                Number of items
                            </InputLabel>
                            <Select
                                labelId="itemnumber-label"
                                id="itemnumber"
                                value={size}
                                onChange={sizeHandler}
                            >
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={20}>20</MenuItem>
                                <MenuItem value={40}>40</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl
                            disabled={sorting}
                            style={{ width: "80%" }}
                        >
                            <InputLabel id="itemnumber-label">
                                Delay time
                            </InputLabel>
                            <Select
                                labelId="speed-label"
                                id="speed"
                                value={delay}
                                onChange={delayHandler}
                            >
                                <MenuItem value={100}>0.1s per swap</MenuItem>
                                <MenuItem value={200}>0.2s per swap</MenuItem>
                                <MenuItem value={500}>0.5s per swap</MenuItem>
                                <MenuItem value={1000}>1s per swap</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <Description description={description} />
                    </Grid>
                </Grid>
            </ThemeProvider>
        </>
    );
};
export default VisualBox;
