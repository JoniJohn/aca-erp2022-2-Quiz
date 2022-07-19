import React from 'react';
import logo from './assets/aca_logo.png';
import './style/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} style={{maxWidth:150, maxHeight:150}} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://africacode.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lesley Loves ACA
        </a>
      </header>
    </div>
  );
}

export default App;
