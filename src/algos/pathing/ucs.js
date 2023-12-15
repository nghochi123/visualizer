import mazeConstants from "../../constants/maze";

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

const ucs = (
    start,
    end,
    grid,
    setGrid,
    endDown,
    setIsPathing,
    setPath,
    setShortest
) => {
    setIsPathing(true);
    const [x, y] = start;
    const [eX, eY] = end;
    let queueX = [];
    let queueY = [];
    let queueZ = [];
    let prev = [];
    for (let i = 0; i < mazeConstants.ROWS; i++) {
        const row = [];
        for (let j = 0; j < mazeConstants.COLS; j++) {
            row.push(false);
        }
        prev.push(row);
    }
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
                prev[tempX][tempY] = [x, y];
                setGrid(grid);
                endDown(end[0], end[1]);
            }
        }
        if ((x === eX && y === eY) || queueX.length === 0) {
            if (x === eX && y === eY) setShortest(z);
            else setShortest(-2);
            setIsPathing(false);
            let [pX, pY] = end;
            let tb = [];
            for (let i = 0; i < mazeConstants.ROWS; i++) {
                const row = [];
                for (let j = 0; j < mazeConstants.COLS; j++) {
                    row.push(false);
                }
                tb.push(row);
            }
            let interval2 = setInterval(() => {
                tb[pX][pY] = true;
                if (prev[pX][pY]) [pX, pY] = prev[pX][pY];
                setPath(tb);
                endDown(end[0], end[1]);
                if (
                    (pX === start[0] && pY === start[1]) ||
                    (pX === prev[pX][pY][0] && pY === prev[pX][pY][1])
                ) {
                    clearInterval(interval2);
                }
            }, 5);
            clearInterval(interval);
        }
    }, 5);
};

export default ucs;
