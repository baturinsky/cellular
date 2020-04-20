const lang = {
  instructions:`Goal of the game is to play all the cards in such an order that at least one alive cell is left.
A card can kill some cells and create new ones, according to the rule written on the card.
Each digit after the S on the card means that a living cell with as much living neighbors will live, otherwise it will die.
Each digit after the B on the card means that in empty cell with as much living neighbors, a new living cell will appear.

For example, B3/S23 means cell survives only with 2 or 3 neighbors and born when there is 3 neighbors.
`
};

export default lang;