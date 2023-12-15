const bubbleSortDescription = {
    header: "Bubble Sort",
    description:
        "Bubble sort works by repeatedly swapping adjacent elements if they are in the wrong order. The largest element passes through to the end of the list, and this repeats until all elemnts are sorted.",
    worsttime: "O(n^2)",
    besttime: "O(n)",
    averagetime: "O(n^2)",
    legend: {
        yellow: "Comparing",
        green: "Sorted",
    },
};

const selectionSortDescription = {
    header: "Selection Sort",
    description:
        "Selection sort works by moving elements into their respective positions one at a time. All elements are compared to find the smallest element, which is placed at the beginning, then followed by the second smallest element, and so on.",
    worsttime: "O(n^2)",
    besttime: "O(n^2)",
    averagetime: "O(n^2)",
    legend: {
        yellow: "Searching for lowest",
        red: "Current lowest",
        green: "Sorted",
    },
};

const insertionSortDescription = {
    header: "Insertion Sort",
    description:
        "Insertion sort works by building the final sorted array one item at a time. Elements are brought to positions that are correct relative to the sorted section of the array.",
    worsttime: "O(n^2)",
    besttime: "O(n)",
    averagetime: "O(n^2)",
    legend: {
        yellow: "Moving",
        green: "Sorted relative to items on left",
    },
};

const quickSortDescription = {
    header: "Quicksort",
    description:
        "Quicksort works by selecting a partition and moving elements larger than the partition to the right of the partition, and elements smaller than the partition to the left. This is repeated for the right and left sides of the partition.",
    worsttime: "O(n^2)",
    besttime: "O(nlog(n))",
    averagetime: "O(nlog(n))",
    legend: {
        blue: "Pivot",
        red: "Lower than pivot",
        green: "Higher than pivot",
        yellow: "Swapping pivot",
    },
};

const bogoSortDescription = {
    header: "Bogosort",
    description:
        "Bogosort is a sorting algorithm based on the generate and test paradigm. The function successively generates permutations of its input until it finds one that is sorted.",
    worsttime: "Infinite",
    besttime: "O(n)",
    averagetime: "O(n*n!)",
    legend: {
        blue: "B",
        red: "O",
        green: "G",
        yellow: "O",
    },
};

export {
    bubbleSortDescription,
    selectionSortDescription,
    insertionSortDescription,
    quickSortDescription,
    bogoSortDescription,
};
