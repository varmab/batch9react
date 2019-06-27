import React from 'react';
import logo from './logo.svg';
import './App.css';

import Welcome from './Welcome'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Welcome title="Batch 9"/>
        <Welcome title="Varma"/>
        </header>
      </div>
    );
  }
}

export default App;
