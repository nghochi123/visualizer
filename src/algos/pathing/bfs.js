const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

const bfs = (start, end, grid, setGrid, endDown) => {
  const [x, y] = start;
  const [eX, eY] = end;
  let queueX = [];
  let queueY = [];
  let queueZ = [];
  grid[x][y] = -1;
  queueX.push(x);
  queueY.push(y);
  queueZ.push(1);
  let interval = setInterval(() => {
    let x = queueX.shift();
    let y = queueY.shift();
    let z = queueZ.shift();
    for (let i = 0; i < 4; i++) {
      let tempX = x + dx[i];
      let tempY = y + dy[i];
      if (
        tempX < grid.length &&
        tempY < grid[0].length &&
        tempX >= 0 &&
        tempY >= 0 &&
        grid[tempX][tempY] === false
      ) {
        queueX.push(tempX);
        queueY.push(tempY);
        queueZ.push(z + 1);
        grid[tempX][tempY] = z;
        setGrid(grid);
        endDown(end[0], end[1]);
      }
    }
    if ((x === eX && y === eY) || queueX.length === 0) {
      clearInterval(interval);
    }
  }, 5);
};

export default bfs;
