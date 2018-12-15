import Square from './square.jsx';
import React from 'react';
import { connect } from 'react-redux';

const Board = function({board, handleReveal, handleExlosion}) {

  return (
    <div>
      {board.map((row, i) => <div key={i}>
        {row.map((square, j) => <Square board={board} key={i.toString() + '-' + j.toString()} position={{i,j}} square={square}></Square>)}
    </div>)}
    </div>
  )
};

const mapStateToProps = ({board}) => ({board});

export default connect(mapStateToProps)(Board);




