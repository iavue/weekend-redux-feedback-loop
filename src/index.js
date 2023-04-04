import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Reducers for each component
const feelingInput = (state = {}, action) => {
    if (action.type === "STORE_THE_FEELING") {
        return action.payload;
    }
    else if (action.type === "RESET") {
        return [];
    }
    return state;
}

const understandingInput = (state = {}, action) => {
    if (action.type === "STORE_THE_UNDERSTANDING") {
        return action.payload;
    }
    else if (action.type === "RESET") {
        return [];
    }
    return state;
}

const supportedInput = (state = {}, action) => {
    if (action.type === "STORE_THE_SUPPORTED") {
        return action.payload;
    }
    else if (action.type === "RESET") {
        return [];
    }
    return state;
}

const commentsInput = (state = {}, action) => {
    if (action.type === "STORE_THE_COMMENTS") {
        return action.payload;
    }
    else if (action.type === "RESET") {
        return [];
    }
    return state;
}

// const resetSurvey = (state = [], action) => {
    
//     return state;
// }

// Store
const storeInstance = createStore(
    combineReducers({
        // Reducer names go here
        feelingInput,
        understandingInput,
        supportedInput,
        commentsInput,
    }),
    applyMiddleware(logger)
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);