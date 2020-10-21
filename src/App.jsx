import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
// import Card from './dnd/Card'
import Todo from './todo'

function App() {
  const [count, setCount ] = useState(0)

  useEffect(() => { document.title = count })

  return (
    <div className="App">
      {/* <Card></Card> */}
      <Todo></Todo>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>count: { count }</p>
        <button onClick={ () => { setCount(count + 1) } }>Click Add Count</button>
      </header>
    </div>
  );
}

export default App;
