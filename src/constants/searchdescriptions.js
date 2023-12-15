const ucsDescription = {
    header: "Uniform Cost Search",
    description:
        "Uniform Cost Search (Breadth first search for a maze like this) uninformed search algorithm that uses the lowest cumulative cost to find a path from the source to the destination. It attempts to traverse the grids closest to it before those further away",
    time: "O(b^d)",
    optimal: "Yes",
};

const dfsDescription = {
    header: "Depth First Search",
    description:
        "Depth-First Search or DFS algorithm is a recursive algorithm that uses the backtracking principle. It entails conducting exhaustive searches of all nodes by moving forward if possible and backtracking, if necessary.",
    time: "O(b^m)",
    optimal: "No",
};

const greedyDescription = {
    header: "Greedy Search",
    description:
        "The greedy algorithm works by making the optimal choice at each step as it attempts to find the overall optimal way to reach the endpoint, using a predefined heuristic.",
    time: "O(b^d)",
    optimal: "No",
};

const astarDescription = {
    header: "A* Search",
    description:
        "A* Search Algorithm is a simple and efficient informed search algorithm that can be used to find the optimal path between two nodes in a graph. It uses both the already traversed path as well as a predefined heuristic to help it make decisions on which direction to move.",
    time: "O(b^d)",
    optimal: "Yes",
};

export { ucsDescription, dfsDescription, greedyDescription, astarDescription };
