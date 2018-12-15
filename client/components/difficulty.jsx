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

    this.handleWidthChange = this.handleWidthChange.bind(this);
    this.handleHeightChange = this.handleHeightChange.bind(this);
    this.handleMinesChange = this.handleMinesChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleWidthChange () {
    this.setState({width: parseInt($(`input[name=width]`).val())})
  }

  handleHeightChange() {
    this.setState({height: parseInt($(`input[name=height]`).val())})
  }

  handleMinesChange() {
    this.setState({mines: parseInt($(`input[name=mines]`).val())})
  }

  fieldReset (e) {
    if (e.target.value === '0') e.target.value = '';
  }

  handleClick (e) {
    e.preventDefault();
    this.props.handleDifficultyChange(this.state);
    this.setState({
      width: '',
      height: 0,
      mines: 0
    });

    $(`input[name=width]`).focus();
  }

  componentDidMount() {
    $(`input[name=width]`).focus();
  }

  render() {
    return (
      <form>
        <label for='width'>Width</label>
        <input className='mx-3' type='number' name='width' onChange={this.handleWidthChange} value={this.state.width} onFocus={this.fieldReset}></input>

        <label for='height'>Height</label>
        <input className='mx-3' type='number' name='height' onChange={this.handleHeightChange} value={this.state.height} onFocus={this.fieldReset}></input>

        <label for='mines'>Mines</label>
        <input className='mx-3' type='number' name='mines' onChange={this.handleMinesChange} value={this.state.mines} onFocus={this.fieldReset}></input>
        
        <button onClick={this.handleClick}>Change Difficulty</button>
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