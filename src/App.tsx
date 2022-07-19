import React from 'react';
import './style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './views/Home';
import QuestionView from './views/QuestionView';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/question/:id" element={<QuestionView />} />
      </Routes>
    </Router>
  );
}

export default App;
