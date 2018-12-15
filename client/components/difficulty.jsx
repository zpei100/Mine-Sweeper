import React from 'react';
import { connect } from 'react-redux';
import handleDifficultyChange from '../actionCreators/handleDifficultyChange';
import $ from 'jquery';

class Difficulty extends React.Component {

  constructor() {
    super();

    this.state = {
      width: 0,
      height: 0,
      mines: 0
    }
  }

  handleWidthChange () {
    this.setState({width: parseInt($(`input[name=width]`).val())})
  };

  handleHeightChange() {
    this.setState({height: parseInt($(`input[name=height]`).val())})
  }

  handleMinesChange() {
    this.setState({mines: parseInt($(`input[name=mines]`).val())})
  }

  fieldReset (e) {
    if (e.target.value === '0') e.target.value = '';
  }

  componentDidMount() {
    $(`input[name=width]`).focus();
  }

  render() {
    return (
      <form>
        <input className='mx-3' type='number' name='width' placeholder='width' onChange={this.handleWidthChange.bind(this)} value={this.state.width} onFocus={this.fieldReset}></input>
        <input className='mx-3' type='number' name='height' placeholder='height' onChange={this.handleHeightChange.bind(this)} value={this.state.height} onFocus={this.fieldReset}></input>
        <input className='mx-3' type='number' name='mines' placeholder='number of mines' onChange={this.handleMinesChange.bind(this)} value={this.state.mines} onFocus={this.fieldReset}></input>
        <button onClick={
          (e) => {
        e.preventDefault();
        this.props.handleDifficultyChange(this.state);
        this.setState({
          width: '',
          height: 0,
          mines: 0
        });

        $(`input[name=width]`).focus();
      }
        }>Change Difficulty</button>
      </form>
    )
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    handleDifficultyChange: (difficulty) => {
      dispatch(handleDifficultyChange(difficulty));
    }
  }
}

export default connect(null, mapDispatchToProps)(Difficulty);