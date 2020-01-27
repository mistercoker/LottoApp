import React from 'react';
import Ball from './Ball';
import './App.css';

function App() {
  return (
    <div className="App">
      <Ball num={37} />
      <Ball num={13} />
      <Ball num={7} />
      <Ball num={15} />
    </div>
  );
}

export default App;
