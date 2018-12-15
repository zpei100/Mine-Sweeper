import React, { Component } from 'react';
import Board from './board.jsx';
import Difficulty from './difficulty.jsx';
import { connect } from 'react-redux';

class App extends Component {

  render() {

    const { numberOfRevealedSquaresRequired, numberOfRevealedSquares } = this.props.board;
    if ( numberOfRevealedSquaresRequired === numberOfRevealedSquares ) alert('YOU WON')

    return (
      <div>
        <div className='d-flex justify-content-around my-3'>
          <Difficulty />
        </div>
        <div className='d-flex justify-content-center m-auto'>
          <Board />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({board}) => ({board})

export default connect(mapStateToProps)(App);