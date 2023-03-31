import React from 'react';
import axios from 'axios';
import './App.css';


// Import components here

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      {/* One component goes here which will be the 'feeling' component.
      Inside the 'feeling' component, will have a form with an input and a 'next' button. 
      Then there should be a route to the next component with the same stuff, and the next
      component with the same stuff, and so on... these will all be nested components. */}
    </div>
  );
}

export default App;
