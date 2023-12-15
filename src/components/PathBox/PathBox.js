import React, { useState } from "react";
import { Button, Typography } from "@material-ui/core";
import mazeConstants from "../../constants/maze";

import * as styles from "./PathBox.module.css";

const SingleBox = ({
    isStart,
    isEnd,
    isWall,
    isVisited,
    isPath,
    onMouseDown,
    row,
    col,
}) => {
    return (
        <div
            onMouseDown={() => onMouseDown(row, col)}
            id={`${row}-${col}`}
            style={{
                height: 30,
                width: 30,
                backgroundColor: isStart
                    ? "#ffd166"
                    : isEnd
                    ? "#ef476f"
                    : isPath
                    ? "#fb5607"
                    : isVisited
                    ? "#118ab2"
                    : isWall
                    ? "#073b4c"
                    : "#06d6a0",
                display: "block",
                float: "left",
                cursor: "pointer",
            }}
        />
    );
};

export default function PathBox({
    mode,
    layout,
    setLayout,
    isPathing,
    setIsPathing,
    path,
    setPath,
    algorithm,
}) {
    const [start, setStart] = useState([0, 0]);
    const [end, setEnd] = useState([
        mazeConstants.ROWS - 1,
        mazeConstants.COLS - 1,
    ]);
    const [toChange, setToChange] = useState(false);
    const [shortest, setShortest] = useState(-1);

    const startDown = (row, col) => {
        setStart([row, col]);
    };
    const endDown = (row, col) => {
        setEnd([row, col]);
    };
    const wallDown = (row, col) => {
        const tempLayout = [...layout];
        const tempWall = tempLayout[row][col];
        tempLayout[row][col] = !tempWall;
        setLayout(tempLayout);
        setToChange(!tempWall);
    };
    const startPath = () => {
        algorithm.current(
            start,
            end,
            layout,
            setLayout,
            endDown,
            setIsPathing,
            setPath,
            setShortest
        );
    };
    const displayText =
        shortest > 0 ? (
            <Typography variant="body1">
                The shortest path from start to end is: {shortest}
            </Typography>
        ) : shortest === -2 ? (
            <Typography variant="body1">Unable to reach the end.</Typography>
        ) : null;
    return (
        <div className={styles.outerContainer}>
            <div className={styles.grid}>
                {layout.map((row, i) => {
                    return (
                        <div key={i} style={{ margin: 0, padding: 0 }}>
                            {row.map((box, boxi) => {
                                return (
                                    <SingleBox
                                        key={boxi}
                                        row={i}
                                        col={boxi}
                                        isStart={
                                            i === start[0] && boxi === start[1]
                                        }
                                        isEnd={i === end[0] && boxi === end[1]}
                                        isWall={box}
                                        isPath={path[i][boxi]}
                                        isVisited={Number.isInteger(
                                            layout[i][boxi]
                                        )}
                                        onMouseDown={
                                            mode === 0
                                                ? startDown
                                                : mode === 1
                                                ? endDown
                                                : wallDown
                                        }
                                        refresh={toChange}
                                    />
                                );
                            })}
                        </div>
                    );
                })}
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 50,
                }}
            >
                <Button
                    disabled={isPathing}
                    variant="outlined"
                    onClick={startPath}
                >
                    Start
                </Button>
                <div style={{ margin: 30 }}>{displayText}</div>
            </div>
        </div>
    );
}
