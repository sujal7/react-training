import { Component } from 'react';

/**
 * Class Component
 */
class Animal extends Component {
  render() {
    return <h1>{this.props.name} is my name. I am a class component.</h1>;
  }
}

export default Animal;
