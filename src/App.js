import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import {StopWatch} from './StopWatch.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StopWatch />
      </header>
    </div>
  );
}

export default App;
