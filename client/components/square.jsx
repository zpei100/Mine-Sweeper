import React, { Component } from 'react';
import { connect } from 'react-redux';
import handleReveal from '../actionCreators/handleReveal';
import handleExplosion from '../actionCreators/handleExplosion';
import handleFlag from '../actionCreators/handleFlag';
import $ from 'jquery';

const Square = function({
  board,
  square: { mined, flagged, revealed, nearbyMines },
  position: {i, j},
  handleReveal,
  handleExplosion,
  handleFlag,
  handleWinningCheck
}) {
  const handleClick = function(e) {
    if (flagged) return;
    if (mined) {
      $(`.mined`).css('background', 'red');
      setTimeout(function() {
        alert('You clicked on a mine !!! Try again...');
        $(`.mined`).css('background', '');

        handleExplosion();
      },0)
    } else {  
      handleReveal({i, j});
      if (nearbyMines === 0) {
        for (var x = i - 1; x <= i + 1; x++) {
          for (var y = j - 1; y <= j + 1; y++) {
            if (board[x] && board[x][y] && !board[x][y].revealed && !(x === i && y === j)) {
              $(`#i${x}j${y}`).trigger('click');
            }
          }
        }
      };
      
    }
  };

  const handleContextMenu = function(e) {
    e.preventDefault();
    handleFlag({i, j})
  }

  const RevealedSquare = function({content}) {
    return <button style={{
      width: '40px',
      height: '40px',
      backgroundColor: 'transparent',
      border: 'none',
      visibility: content === 'x' ? 'hidden' : 'visible'
    }}>{content}</button>
  };

  return  (
    revealed
    ? (nearbyMines === 0
      ? <RevealedSquare hidden content='x'/> 
      : <RevealedSquare content={nearbyMines} />)
    : <button 
      style={{
        width: '40px',
        height: '40px'
      }}
      className={mined ? 'mined' : ''}
      onClick={handleClick}
      onContextMenu={handleContextMenu}
      id={`i${i}j${j}`}
    >
      <span style={{visibility: flagged ? 'visible' : 'hidden', color: 'blue' }}>x</span>
    </button>
  );
};

const mapDispatchToProps = function(dispatch) {
  return {
    handleReveal: position => {
      dispatch(handleReveal(position));
    },
    handleExplosion: () => {
      dispatch(handleExplosion());
    },
    handleFlag: position => {
      dispatch(handleFlag(position))
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Square);
