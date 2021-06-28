import React, { useState } from "react";

import * as styles from "./PathBox.module.css";

const SingleBox = ({
  isStart,
  isEnd,
  isWall,
  onMouseDown,
  onMouseEnter,
  onMouseUp,
  row,
  col,
}) => {
  return (
    <div
      onMouseDown={() => onMouseDown(row, col)}
      onMouseEnter={() => onMouseEnter(row, col)}
      onMouseUp={() => onMouseUp(row, col)}
      id={`${row}-${col}`}
      style={{
        height: 30,
        width: 30,
        backgroundColor: isStart
          ? "#118ab2"
          : isEnd
          ? "#ef476f"
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

export default function PathBox({ mode, layout, setLayout }) {
  const [start, setStart] = useState([0, 0]);
  const [end, setEnd] = useState([19, 34]);
  const [mouseDown, setMouseDown] = useState(false);
  const [toChange, setToChange] = useState(false);
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
    setMouseDown(true);
    setToChange(!tempWall);
  };
  const wallOver = (row, col) => {
    if (!mouseDown) return;
    const tempLayout = [...layout];
    tempLayout[row][col] = toChange;
    setLayout(tempLayout);
  };
  const wallUp = () => {
    setMouseDown(false);
  };
  return (
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
                  isStart={i === start[0] && boxi === start[1]}
                  isEnd={i === end[0] && boxi === end[1]}
                  isWall={box}
                  onMouseDown={
                    mode === 0 ? startDown : mode === 1 ? endDown : wallDown
                  }
                  onMouseEnter={mode === 2 ? wallOver : (a, b) => null}
                  onMouseUp={mode === 2 ? wallUp : (a, b) => null}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
