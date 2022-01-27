/**
 * Functional Component
 * @param {object} props - Properties of a Person
 * @returns I am {name of person}.
 */
function Person(props) {
  return <h1>I am {props.name}. I am a functional component</h1>;
}

export default Person;
