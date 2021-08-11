# Algorithm Visualisation

Visualisation tool to visualise simple algorithms. [Live Demo](https://vis.nghochi.xyz/)

![Visualisation App](https://user-images.githubusercontent.com/35862661/114258548-c242db80-99f9-11eb-8399-177fe87cae38.png)

## Motivation

Was wondering if I could make a visualisation tool similar to that of [VisuAlgo](https://visualgo.net/en) to visualise a couple of the algorithms that I learnt.

## Features

- Algorithms currently included:
  - Bubble Sort
  - Insertion Sort
  - Selection Sort
  - Quicksort
  - Breadth First Search
- Description of algorithm
- Dark/Light mode toggle
- Color coded bars
- Path finder for BFS

## Usage

For sorting algorithms:

Just select the algorithm, the number of items (bars) to display, the delay time per comparison/swap, randomize the list and hit sort.

For pathfinder:

Set up start and end points, then build walls by clicking and dragging. Click start once you're done, and watch as the algorithm attempts to search for the endpoint.

Reset all resets both the path and walls, while reset path only resets the path, keeping the walls intact.

## Known issues

- Algorithms get slower over time despite not changing the delay time.

## Tech/Frameworks used

- [ReactJS](https://reactjs.org/)
- [create-react-app](https://github.com/facebook/create-react-app)
- [Material UI](https://material-ui.com/)

## Future additions

Looking to add more algorithms/data structures such as linked lists/graph stuff.

## Color Palette

[Color palette](https://coolors.co/ef476f-ffd166-06d6a0-118ab2-073b4c) used for the sorting bars.
