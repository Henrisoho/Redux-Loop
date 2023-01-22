import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { logger } from 'redux-logger'


const addFeeling = (state=[], action) => {
  if (action.type === 'ADD_FEELING') {
    const newResponse = Number(action.payload);
    
    const newFeeling = newResponse
    let newResponseArray = [...state]
    newResponseArray.push(newFeeling)
    console.log(newResponseArray)
    return newResponseArray;
  }
  if (action.type === 'RESET_SURVEY') {
    state = []
    return state
  }
  return state;
}

const addUnderstanding = (state = [], action) => {
    if (action.type === 'ADD_UNDERSTANDING') {
        const newResponse = Number(action.payload);
    
    const newUnderstanding = newResponse
    let newResponseArray = [...state]
    newResponseArray.push(newUnderstanding)
    console.log(newResponseArray)
    return newResponseArray;
    }
    if (action.type === 'RESET_SURVEY') {
    state = []
    return state
  }
    return state;
}

const addSupport = (state = [], action) => {
    if (action.type === 'ADD_SUPPORT') {
        const newResponse = Number(action.payload);
    
    const newSupport = newResponse
    let newResponseArray = [...state]
    newResponseArray.push(newSupport)
    console.log(newResponseArray)
    return newResponseArray;
    }
    if (action.type === 'RESET_SURVEY') {
    state = []
    return state
  }
    return state;
}

const addComment = (state = [], action) => {
    if (action.type === 'ADD_COMMENT') {
        const newResponse = action.payload;
    
    const newComment = newResponse
    let newResponseArray = [...state]
    newResponseArray.push(newComment)
    console.log(newResponseArray)
    return newResponseArray;
    }
    if (action.type === 'RESET_SURVEY') {
    state = []
    return state
  }
    return state;
}

const answerList = (state = [], action) => {
    switch (action.type) {
        case 'SET_ANSWER':
            return action.payload;
        default:
            return state;
    }
}

const surveryStore = createStore(
    combineReducers({
        answerList,
        addFeeling,
        addUnderstanding,
        addSupport,
        addComment
    }),
    applyMiddleware(
        logger
    )
);
//END STORE//


ReactDOM.render(<Provider store={surveryStore}> <App /></Provider>, document.getElementById('root'));
