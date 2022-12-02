import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

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
          <Feeling />
        </Route>
      </Router>
    </div>
  );
}

export default App;
