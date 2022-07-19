import React from 'react';
// import logo from './assets/aca_logo.png';
import './style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Space from './custom_components/Space';
import Button from 'react-bootstrap/Button';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to ACA Quiz.</h1>
        <Space></Space>
        <div className='border rounded p-3'>
          <h5>Please click start to begin the quiz.</h5>
          <Space></Space>
          <Button className="bg-info">Start</Button>
        </div>
        <Space></Space>
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
