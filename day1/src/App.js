import logo from './logo.svg';
import './App.css';
import Component1 from './Component1';
import Component2 from './Component2';

// React uses JSX: JavaScript+HTML - we use className instead of class
function App() {
  // const AppHeaderStyle = {
  //   backgroundColor: 'red',
  // };
  // // CSS in JS solution
  return (
    <div className="App">
      <header className="App-header">
        {/*  We can use array.map inside {} since it is one liner. */}
        <img src={logo} className="App-logo" alt="logo" />

        {/* <Component1 /> */}
        <Component1 text="I am class component." />

        <Component2 body="I am functional component." />

        {/* create two components class and functional with props. */}

        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
