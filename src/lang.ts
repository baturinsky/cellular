const lang = {
  instructions:`Goal of the game is to press all the buttons in the right order without killing all the cells.
Buttons can kill some cells and create new ones, according to what's written on the button.
Each digit after the S on the button means that a living cell with as much living neighbors will live, otherwise it will die.
Each digit after the B on the button means that in empty cell with as much living neighbors, a new living cell will appear.

For example, B3/S23 means cell survives only with 2 or 3 neighbors and born when there is 3 neighbors.
`
};

export default lang;