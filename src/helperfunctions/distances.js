const euclidean = (start, end) => {
    let [x, y] = start;
    let [x1, y1] = end;
    return Math.pow(x - x1, 2) + Math.pow(y - y1, 2);
};

export { euclidean };
