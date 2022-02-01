import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
// Create a component :
// Must have counter: span
// Buttons to decrease and increase counter
// try setState with prev props

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter value={0} />
      </header>
    </div>
  );
}

export default App;
