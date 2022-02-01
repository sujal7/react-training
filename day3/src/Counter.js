import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: parseInt(props.value),
    };
  }

  handlePlusClick = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };

  handleMinusClick = () => {
    if (this.state.value > 0) {
      this.setState({
        value: this.state.value - 1,
      });
    }
  };

  render() {
    return (
      <div>
        <div>{this.state.value}</div>
        <div>
          <button onClick={this.handleMinusClick}>-</button>
          <button onClick={this.handlePlusClick}>+</button>
        </div>
      </div>
    );
  }
}
