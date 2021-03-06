import React, { useState, useEffect } from "react";
import { Button, Typography } from "@material-ui/core";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";
import PathBox from "../../components/PathBox/PathBox";
import * as styles from "./PathFinding.module.css";

export const PathFinderLegend = () => {
  return (
    <div
      style={{
        margin: "15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className={styles.boxyellow}></div>
      <p>Start</p>
      <div className={styles.boxred}></div>
      <p>End</p>
      <div className={styles.boxdarkblue}></div>
      <p>Wall</p>
      <div className={styles.boxblue}></div>
      <p>Visited</p>
      <div className={styles.boxgreen}></div>
      <p>Unvisited</p>
      <div className={styles.boxorange}></div>
      <p>Path</p>
    </div>
  );
};

export default function PathFinding() {
  const table = [];
  for (let i = 0; i < 20; i++) {
    const row = [];
    for (let j = 0; j < 35; j++) {
      row.push(false);
    }
    table.push(row);
  }
  const [mode, setMode] = useState(0);
  const [layout, setLayout] = useState([]);
  const [isPathing, setIsPathing] = useState(false);
  const [path, setPath] = useState(table);
  const resetPath = () => {
    const p = [];
    for (let i = 0; i < 20; i++) {
      const row = [];
      for (let j = 0; j < 35; j++) {
        row.push(false);
      }
      p.push(row);
    }
    setPath(p);
  };
  useEffect(() => {
    const grid = [];
    for (let i = 0; i < 20; i++) {
      const row = [];
      for (let j = 0; j < 35; j++) {
        row.push(false);
      }
      grid.push(row);
    }
    setLayout(grid);
  }, []);
  const resetWalls = () => {
    const grid = [];
    for (let i = 0; i < 20; i++) {
      const row = [];
      for (let j = 0; j < 35; j++) {
        row.push(false);
      }
      grid.push(row);
    }
    setLayout(grid);
    resetPath();
  };
  const resetGrid = () => {
    const grid = [...layout];
    for (let i = 0; i < 20; i++) {
      for (let j = 0; j < 35; j++) {
        if (grid[i][j] !== true) {
          grid[i][j] = false;
        }
      }
    }
    setLayout(grid);
    resetPath();
  };
  const handleModeChange = (event, newMode) => {
    if (newMode !== null) setMode(newMode);
  };
  return (
    <div>
      <Typography
        variant="h3"
        style={{ display: "flex", justifyContent: "center" }}
      >
        Breadth First Search
      </Typography>
      <hr />
      <Typography variant="body1">
        The algorithm used in the path finder below is a simple breadth first
        search algorithm that tries to find the shortest path to an endpoint. It
        attempts to traverse the grids closest to it before those further away.
        Another useful shortest path algorithm is the Dijkstra's Algorithm,
        which is used more to find the shortest path between vertices of a
        graph.
      </Typography>
      <Typography variant="body1">
        To use the path finder, set up your start and end point. The default is
        at the top left and bottom right respectively. Set up your desired walls
        and click start to begin.
      </Typography>
      <Typography variant="body1">
        Reset all removes walls and marks all spots as unvisited, while reset
        path marks all spots as unvisited but retains the walls.
      </Typography>
      <ToggleButtonGroup
        value={mode}
        exclusive
        onChange={handleModeChange}
        style={{ margin: 20 }}
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
      <Button
        style={{ marginLeft: 30 }}
        disabled={isPathing}
        onClick={resetWalls}
        variant="outlined"
      >
        Reset all
      </Button>
      <Button
        style={{ marginLeft: 30 }}
        disabled={isPathing}
        onClick={resetGrid}
        variant="outlined"
      >
        Reset path
      </Button>
      <PathFinderLegend />
      <PathBox
        mode={mode}
        layout={layout}
        setLayout={setLayout}
        isPathing={isPathing}
        setIsPathing={setIsPathing}
        path={path}
        setPath={setPath}
      />
    </div>
  );
}
