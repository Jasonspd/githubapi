import React, { Component } from 'react';
import './App.css';
import Repos from './components/Repos/Repos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Repos />
      </div>
    );
  }
}

export default App;