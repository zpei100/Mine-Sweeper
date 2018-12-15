import generateBoard from '../utils/generateBoard';

const width = 10;
const height = 10;
const mines = 10;

export default function(state = generateBoard(width, height, mines), action) {
  var newBoard = Object.assign([], state);
  switch (action.type) {
    case 'REVEAL_SQUARE': {
      const {i, j} = action.payload;
      newBoard[i][j].revealed = true;
      newBoard.numberOfRevealedSquares++;
      return newBoard;
    } case 'FLAG_SQUARE': {
      const {i, j} = action.payload;
      newBoard[i][j].flagged = true;
      return newBoard
    } case 'EXPLOSION': {
      return generateBoard(width, height, mines);
    } case 'FLAGGED': {
      const {i, j} = action.payload;
      newBoard[i][j].flagged = !newBoard[i][j].flagged;
      return newBoard;
    } case 'CHANGE_DIFFICULTY': {
        const { width, height, mines } = action.payload;
        return generateBoard(width, height, mines);
    } default: return state;
  }
}





