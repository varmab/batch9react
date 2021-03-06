import React from 'react';
import logo from './logo.svg';
import './App.css';

import Welcome from './Welcome'
import Counter from './Counter'
import Books from './Books'
import Todos from './Todos'

import Users from './Users'
import Library from './Library'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Welcome year={2020} isGreeting={false}/>
        <Welcome title="Varma" year={2019}/>
        </header>
        <Library/>
      </div>
    );
  }
}

export default App;
