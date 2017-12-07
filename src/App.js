import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import api from './lib/api'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  getUser() {
    console.log('get user');
    console.log(this);
    console.log(api.getUser());
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro" onClick={this.getUser()}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/topics">Topics</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" />
            <Route path="/about" />
            <Route path="/topics" />
          </div>
        </Router>
        <p>Are you 87?</p>
      </div>
    );
  }
}

export default App;
