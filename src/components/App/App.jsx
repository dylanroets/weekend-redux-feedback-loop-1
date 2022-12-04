import React from 'react';
import axios from 'axios';
import './App.css';
//need HashRouter and Route to create routes for specific urls
import { HashRouter as Router, Route } from 'react-router-dom';
//import jsx functions from all components
import Home from '../Home/Home.jsx';
import Questions from '../Questions/Questions.jsx';
import Review from '../Review/Review.jsx';
import Success from '../Success/Success.jsx';

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
        {/* Strategy w/ below reusable components:
        Send Question to print on the DOM 
        Send page to determine the property for the dispatch request 
        Send next page url to use in navigating to the next url  */}
        <Route exact path="/Feeling">
          <Questions
            question="How are you feeling today?"
            page="Feeling"
            nextpage="/Support"
          />
        </Route>
        <Route exact path="/Support">
          <Questions
            question="How well are you being supported?"
            page="Support"
            nextpage="/Understanding"
          />
        </Route>
        <Route exact path="/Understanding">
          <Questions
            question="How well are you understanding the content?"
            page="Understanding"
            nextpage="/Comments"
          />
        </Route>
        <Route exact path="/Comments">
          <Questions
            question="Any comments you want to leave?"
            page="Comments"
            nextpage="/Review"
          />
        </Route>
        <Route exact path="/Review">
          <Review nextPage="/Success" />
        </Route>
        <Route exact path="/Success">
          <Success />
        </Route>
      </Router>
    </div>
  );
}

export default App;
