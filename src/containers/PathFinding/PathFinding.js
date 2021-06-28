import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";
import PathBox from "../../components/PathBox/PathBox";

export default function PathFinding() {
  const [mode, setMode] = useState(0);
  const [layout, setLayout] = useState([]);
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
  const resetGrid = () => {
    const grid = [];
    for (let i = 0; i < 20; i++) {
      const row = [];
      for (let j = 0; j < 35; j++) {
        row.push(false);
      }
      grid.push(row);
    }
    setLayout(grid);
  };
  const handleModeChange = (event, newMode) => {
    setMode(newMode);
  };
  return (
    <div>
      <ToggleButtonGroup
        value={mode}
        exclusive
        onChange={handleModeChange}
        style={{ margin: 20 }}
      >
        <ToggleButton value={0}>Set Start</ToggleButton>
        <ToggleButton value={1}>Set End</ToggleButton>
        <ToggleButton value={2}>Set Walls</ToggleButton>
      </ToggleButtonGroup>
      <Button onClick={resetGrid} variant="outlined">
        Reset Walls
      </Button>
      <PathBox mode={mode} layout={layout} setLayout={setLayout} />
    </div>
  );
}
