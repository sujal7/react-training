import React, { Component } from 'react';
import Component1 from './Component1';

export default class State extends Component {
  constructor() {
    super();
    this.state = {
      firstName: 'Sujal',
      lastName: 'Duwa',
    };

    // setTimeout(() => {
    //   this.setState({
    //     firstName: 'John',
    //     lastName: 'Wick',
    //   });
    // }, 2000);

    // We can use it outside constructor as well.
    // use arrow function to prevent  binding issues.
    this.handeClick = () => {
      this.setState({
        firstName: 'John',
        lastName: 'Wick',
      });
    };
  }

  componentDidMount() {
    console.log('This was mounted.');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Component was updated', prevProps, prevState, snapshot);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Component should update', nextProps, nextState);

    if (nextState.firstName !== this.state.firstName) {
      return true;
    }
    return false;
  }

  // handleClick = () => {
  //   this.setState({
  //     firstName: 'John',
  //     lastName: 'Wick',
  //   });
  // };

  render() {
    return (
      <div>
        <div>First Name: {this.state.firstName}</div>
        <div>Last Name: {this.state.lastName}</div>
        <button onClick={this.handeClick}>Change Name</button>
        {/* <Component1 text="Component 1" /> */}
      </div>
    );
  }
}
