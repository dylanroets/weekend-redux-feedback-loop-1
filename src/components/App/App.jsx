import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from '../Home/Home.jsx';
import Feeling from '../Feeling/Feeling.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Feeling">
          <Feeling
            question="How are you feeling today?"
            page="Feeling?"
            nextpage="/Supported"
          />
        </Route>
        <Route exact path="/Supported">
          <Feeling
            question="How well are you being supported?"
            page="Supported?"
          />
        </Route>
      </Router>
    </div>
  );
}

export default App;
