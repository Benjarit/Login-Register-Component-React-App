import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Login from './Login'
import Register from './Register'
import Profile from './Profile'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="Outter">
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
            <Route exact path="/">
                <Login />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/register">
                <Register />
              </Route>
              <Route exact path="/profile">
                <Profile />
              </Route>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;