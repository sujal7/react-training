import { Component } from 'react';

/**
 * Class Component
 */
class AnimalType extends Component {
  render() {
    return <h1>and I am a {this.props.type}.</h1>;
  }
}

export default AnimalType;
