import mazeConstants from "../../constants/maze";
import { euclidean } from "../../helperfunctions/distances";
import PriorityQueue from "../../helperfunctions/priorityqueue";

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

const greedy = (
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
    let heuristicQueue = new PriorityQueue();
    let prev = [];
    for (let i = 0; i < mazeConstants.ROWS; i++) {
        const row = [];
        for (let j = 0; j < mazeConstants.COLS; j++) {
            row.push(false);
        }
        prev.push(row);
    }
    grid[x][y] = -1;
    heuristicQueue.enqueue([euclidean([x, y], [eX, eY]), x, y, 1]);
    let interval = setInterval(() => {
        // eslint-disable-next-line
        let [h, x, y, z] = heuristicQueue.dequeue();
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
                heuristicQueue.enqueue([
                    euclidean([tempX, tempY], [eX, eY]),
                    tempX,
                    tempY,
                    z + 1,
                ]);
                grid[tempX][tempY] = z;
                prev[tempX][tempY] = [x, y];
                setGrid(grid);
                endDown(end[0], end[1]);
            }
        }
        if ((x === eX && y === eY) || heuristicQueue.isEmpty()) {
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

export default greedy;
