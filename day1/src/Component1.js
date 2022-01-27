import React, { Component } from 'react';

export default class Component1 extends Component {
  constructor() {
    super();

    // props is undefined because render is not called yet when constructor is called.
    console.log('props', this.props);
  }

  render() {
    return <div>{this.props.text}</div>;
  }
}

// Functional approach is better
// export default function Component2() {
//   return <div></div>;
// }
