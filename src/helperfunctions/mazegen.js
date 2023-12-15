class DisjointSet {
    constructor(size) {
        this.parent = new Array(size);
        this.rank = new Array(size);
        for (let i = 0; i < size; i++) {
            this.parent[i] = i;
            this.rank[i] = 0;
        }
    }

    find(i) {
        if (this.parent[i] !== i) {
            this.parent[i] = this.find(this.parent[i]);
        }
        return this.parent[i];
    }

    union(x, y) {
        let xRoot = this.find(x);
        let yRoot = this.find(y);

        if (xRoot === yRoot) return;

        if (this.rank[xRoot] < this.rank[yRoot]) {
            this.parent[xRoot] = yRoot;
        } else if (this.rank[xRoot] > this.rank[yRoot]) {
            this.parent[yRoot] = xRoot;
        } else {
            this.parent[yRoot] = xRoot;
            this.rank[xRoot]++;
        }
    }
}

function generateMaze(width, height, openness) {
    const totalCells = width * height;
    const ds = new DisjointSet(totalCells);

    let walls = [];

    let maze = Array.from({ length: height }, () => Array(width).fill(true));

    for (let y = 0; y < height; y += 2) {
        for (let x = 0; x < width; x += 2) {
            maze[y][x] = false;
            if (x > 0) walls.push({ x: x - 1, y });
            if (y > 0) walls.push({ x, y: y - 1 });
            if (x < width - 1) walls.push({ x: x + 1, y });
            if (y < height - 1) walls.push({ x, y: y + 1 });
        }
    }

    walls = shuffleArray(walls);

    walls.forEach((wall) => {
        let [cell1, cell2] = getAdjacentCells(wall, width);

        if (ds.find(cell1) !== ds.find(cell2)) {
            if (Math.random() < openness) {
                ds.union(cell1, cell2);
                maze[wall.y][wall.x] = false;
            }
        }
    });

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            maze[i][j] = false;
            maze[maze.length - 1 - i][maze[0].length - 1 - j] = false;
        }
    }

    return maze;
}

function getAdjacentCells(wall, width) {
    let cells = [];

    if (wall.x % 2 === 0) {
        cells.push(wall.y * width + wall.x / 2);
        cells.push(wall.y * width + (wall.x / 2 + 1));
    } else {
        cells.push((wall.y / 2) * width + wall.x);
        cells.push((wall.y / 2 + 1) * width + wall.x);
    }
    return cells;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export default generateMaze;
