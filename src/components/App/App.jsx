import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Admin from '../Admin/Admin';
import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Reset from '../Thanks/Reset';


function App() {

  return (
    <Router>
   <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Daily Survey</h1>
      </header>
        <Route exact path="/">
            <Feelings />
        </Route>

        <Route exact path="/Understanding">
            <Understanding/>
        </Route>

        <Route exact path="/Supported">
            <Supported/>
        </Route>

        <Route exact path="/Comments">
            <Comments />
        </Route>

        <Route exact path="/Review">
            <Review/>
        </Route>

        <Route exact path="/Thanks">
            <Reset/>
        </Route>

        <Route exact path="/Admin">
            <Admin/>
        </Route>

    </div>
</Router>
  );
}

export default App;

