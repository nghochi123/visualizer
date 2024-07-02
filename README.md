# Algorithm Visualisation

Visualisation tool to visualise simple algorithms. [Live Demo](https://vis.nghochi.xyz/)

![Visualisation App](https://user-images.githubusercontent.com/35862661/114258548-c242db80-99f9-11eb-8399-177fe87cae38.png)

## Motivation

Was wondering if I could make a visualisation tool similar to that of [VisuAlgo](https://visualgo.net/en) to visualise a couple of the algorithms that I learnt.

## Features

- Algorithms currently included:
  - Bubblesort
  - Insertion Sort
  - Selection Sort
  - Quicksort
  - Breadth First Search
- Pathfinding algorithms included:
  - Uniform Cost Search (Breadth First Search since same cost)
  - Depth First Search
  - Greedy Search
  - A* Search
- Description of algorithm
- Dark/Light mode toggle
- Color coded bars

## Usage

For sorting algorithms:

Just select the algorithm, the number of items (bars) to display, the delay time per comparison/swap, randomize the list and hit sort.

For pathfinder:

Reset to re-generate maze. You can add and remove walls manually if desired by clicking on set walls and clicking on the grids you desire to add or remove walls to or from. Start and end positions are also settable.

## Tech/Frameworks used

- [ReactJS](https://reactjs.org/)
- [create-react-app](https://github.com/facebook/create-react-app)
- [Material UI](https://material-ui.com/)

## Color Palette

[Color palette](https://coolors.co/ef476f-ffd166-06d6a0-118ab2-073b4c) used for the sorting bars.
