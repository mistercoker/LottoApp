import React from 'react';
import Ball from './Ball';
import Lottery from './Lottery';
import './App.css';

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title='Ball Numbers' maxNum={22} numBalls={6}   />
    </div>
  );
}

export default App;
