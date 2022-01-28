import React, { Component } from 'react';

export default class Component1 extends Component {
  componentWillUnmount() {
    console.log('Component will unmount');
  }

  render() {
    return <div>Component1</div>;
  }
}
