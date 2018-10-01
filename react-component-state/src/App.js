import React, { Component } from 'react';
import logo from './logo.svg';
import Clock from './Clock/Clock';
import Title from './Title/Title';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* TODO: demo example for Component state */}
        <Title title="I am React" subtitle="I'm Groot !" />
        <Title title="I am alone Title" />
        <Clock />
      </div>
    );
  }
}

export default App;
