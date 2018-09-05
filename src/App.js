import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    return (
      <div className="App">
              <Search />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Wikipedia Viewer</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      </div>
    );
  }
}

export default App;


