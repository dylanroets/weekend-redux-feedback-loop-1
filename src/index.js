import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
//will need createStore and combineReducers from redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

//TODO: Make a reducer called 'MAKE_COMMENT', starts as {}
const comment = (state = {}, action) => {
  //console.log('in comment reducer:', action.payload);
  if (action.type === 'MAKE_COMMENT') {
    if (action.payload.page === 'Feeling?') {
      let newState = { ...state, feeling: action.payload.value };
      console.log(state);
      console.log(newState);
      return newState;
    }
  }
  //Idea is each action is going to add another property to the object so can be controlled by one
  return state;
};

//CombineReducers to use in Provider
const store = createStore(combineReducers({ comment }));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
