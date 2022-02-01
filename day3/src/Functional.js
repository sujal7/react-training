import React, { useEffect, useState } from 'react';

// React hooks

// ref: dont use, not recommended unless there is no choice

// Memoization

// useCallbacks

// React Router

// API Integration with Async - Project management + code quality

// Global state management - Redux and context api + memoization

export default function Functional({ content }) {
  const [state, setState] = useState({
    firstName: 'Sujal',
    lastName: 'Duwa',
  });

  const [counter, setCounter] = useState(0);

  // This hook is for component mount. ps: can be used to call api when component mounts
  useEffect(() => {
    console.log('mounted');
    return () => {
      // document.removeEventListener(); when component unmounts
      console.log('unmounted');
    };
  }, []); // here, [] is dependency array.

  // This hook is for state change
  useEffect(() => {
    console.log('State changed', state);

    // return () => {
    //   second;
    // };
  }, [state]);

  // useEffect(() => {
  //   console.log('State or counter changed', state, counter);
  // }, [state, counter]);

  const changeName = () => {
    setState({
      firstName: 'John',
      lastName: 'Wick',
    });
  };

  // Higher Order Function (HOF) should either have function arguement or return function.

  // HOC takes a component returns a component.

  return (
    <div>
      <button onClick={() => changeName()}>Change</button>
    </div>
  );
}
