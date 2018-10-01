import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };

    this.add = this.add.bind(this);
    this.substract = this.substract.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');

    return null;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('-----------------------');
    console.warn('getSnapshotBeforeUpdate');
    console.warn('prevState', prevState.count);
    console.log('-----------------------');

    return null;
  }

  componentDidUpdate(prevProps, prevState) {

    console.log('-----------------------');
    console.warn('componentDidUpdate');
    console.warn('prevState', prevState.count);
    console.log('-----------------------');
  }

  componentDidMount(prevProps, prevState) {

    console.warn('componentDidMount');
  }

  add() {

    this.setState({
      count: this.state.count + 1
    });
  }

  substract() {

    this.setState({
      count: this.state.count - 1
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <h2>{this.state.count}</h2>
          <button onClick={this.add}> + </button>
          <button onClick={this.add}> - </button>
        </div>
      </div>
    );
  }
}

export default App;
