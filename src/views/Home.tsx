import React from 'react';
// import Button from 'react-bootstrap/esm/Button';
import Space from '../custom_components/Space';

import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <header className="App-header">
                <h1>Welcome to ACA Quiz.</h1>
                <Space></Space>
                <div className='border rounded p-3'>
                <h5>Please click Start to begin the quiz.</h5>
                <Space></Space>
                <Link to="/question/1"  className="btn btn-info">
                    Start
                </Link>              
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

export default Home;