import React from 'react';
import axios from 'axios';
import './App.css';
//will need createStore and combineReducers from redux

//TODO: Make a reducer called 'MAKE_COMMENT', starts as {}
//Idea is each action is going to add another property to the object so can be controlled by one

//CombineReducers to use in Provider

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      {/* TODO: Create Routes for Each Component 
     TODO: Wrap App in Provider for store access  */}
    </div>
  );
}

export default App;
