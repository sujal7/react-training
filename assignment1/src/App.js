import Person from './Person';
import Location from './Location';
import Animal from './Animal';
import AnimalType from './AnimalType';

const personStyle = {
  color: 'blue',
  backgroundColor: 'grey',
  fontSize: '1rem',
};

const animalStyle = {
  color: 'red',
  backgroundColor: 'skyblue',
  fontSize: '0.8rem',
};

function App() {
  return (
    <div className="App">
      <div className="persons" style={personStyle}>
        <Person name="Ram" />
        <Location name="Baneshwor" />
        <Person name="Shyam" />
        <Location name="Koteshwor" />
      </div>
      <div className="animals" style={animalStyle}>
        <Animal name="Tiger" />
        <AnimalType type="Carnivorous" />
        <Animal name="Panda" />
        <AnimalType type="Carnivorous" />
      </div>
    </div>
  );
}

export default App;
