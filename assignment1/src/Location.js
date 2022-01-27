/**
 * Functional Component
 * @param {object} props - Properties of location.
 * @returns I live in {propety name}.
 */
function Location(props) {
  return <h1>I live in {props.name}.</h1>;
}

export default Location;
