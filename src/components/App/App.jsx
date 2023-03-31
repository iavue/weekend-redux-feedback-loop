import React, { useEffect, useState } from 'react';
// might not need useEffect
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// Import components here
import Feeling from '../Feeling/Feeling.jsx';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      {/* Routes for each page goes here with each component */}
      <Router>

        {/* This is the Feeling component but also the Home page. 
        This is the page that the user gets when they get to the 
        Thankyou component and click Leave New Feedback. */}
        <Route path="/" exact>
          <Feeling />
        </Route>

        <Route path="/understanding">
          <Understanding />
        </Route>

        <Route path="/supported">
          <Supported />
        </Route>

        <Route path="/comments">
          <Comments />
        </Route>

        <Route path="/review">
          <Review />
        </Route>

        {/* <Route path="/thankyou">
          <Thankyou />
        </Route> */}

      </Router>
    </div>
  );
}

export default App;
