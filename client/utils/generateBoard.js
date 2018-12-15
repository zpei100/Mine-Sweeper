const generateMines = function(width, height, mines) {
  const total = width * height;
  if (mines > total) throw new Error('The number of mines can not be greater than the number of squares !!!');
  const randomArray = [];
  const generateInt = function(total) {
    return Math.floor(Math.random() * total)
  }

  while (randomArray.length < mines) {
    const randomInt = generateInt(total);
    if (!randomArray.includes(randomInt)) randomArray.push(randomInt);
  };

  return randomArray.map(int => {
    return {
      i: Math.floor(int/width), 
      j: int%width
    }
  })
}

export default function(width, height, mines) {
  const initialBoard = [];
  initialBoard.numberOfRevealedSquaresRequired = width * height - mines;
  initialBoard.numberOfRevealedSquares = 0;

  for (var i = 0; i < height; i++) {
    initialBoard[i] = [];
    for (var j = 0; j < width; j++) {
      initialBoard[i][j] = {
        mined: false,
        revealed: false,
        flagged: false,
        nearbyMines: 0,
      } 
    }
  }

  generateMines(width, height, mines).forEach(({i, j}) => {
    initialBoard[i][j].mined = true;
    for (var x = i - 1; x <= i + 1; x++) {
      for (var y = j - 1; y <= j + 1; y++) {
        if (initialBoard[x] && initialBoard[x][y]) initialBoard[x][y].nearbyMines++;
      }
    }
  });

  return initialBoard;
};