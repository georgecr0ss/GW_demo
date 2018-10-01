import React, { Component } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

class App extends Component {
  constructor(props) {
    super();

    this.routes = [
      // Add links here
    ];
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header routes={this.routes} />
          {/* Declare your routes here */}
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
