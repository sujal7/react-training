import Component1 from './Component1';
import Component2 from './Component2';
import State from './State';

// React uses JSX: JavaScript+HTML - we use className instead of class
function App() {
  // const AppHeaderStyle = {
  //   backgroundColor: 'red',
  // };
  // // CSS in JS solution
  return (
    <div className="App">
      {/* <Component1 text="I am class component.">
        <Component2 body="I am functional component." />
      </Component1> */}
      <State />
    </div>
  );
}

export default App;
