import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
//will need createStore and combineReducers from redux
import { createStore, combineReducers } from 'redux';
//need provider to give all components in the app access to store
import { Provider } from 'react-redux';

//Reducer for all answer inputs,
//returns object with properties of each question and values of the answers
const comment = (state = {}, action) => {
  if (action.type === 'MAKE_COMMENT') {
    let pageQuestion = action.payload.page;
    let value = action.payload.value;
    let newState = { ...state, [pageQuestion]: value };
    console.log(state);
    console.log(newState);
    return newState;
  } else if (action.type === 'CLEAR_STORE') {
    return {};
  }
  // ^^Idea is each action adds another property to the object
  //this allows for easy editing
  return state;
};

//CombineReducers to create store
const store = createStore(combineReducers({ comment }));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
