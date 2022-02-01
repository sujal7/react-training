import './App.css';
import Counter from './Counter';
import Functional from './Functional';

// UI Framework vs CSS Framework

// CSS Framework: Bootstrap

// UI Framework: Material UI: Alert, TextField

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter value="0" /> */}
        <Functional content={'hello there'} />
      </header>
    </div>
  );
}

export default App;
