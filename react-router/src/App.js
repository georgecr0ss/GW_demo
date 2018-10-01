import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Portfolios from './components/Portfolios/Portfolios';

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
          {/* <Switch> */}

          <Route path="/about/:comapny/:type?" render={(props) => {
            debugger;
            return (
              <h1 params={props.match.params}> About fwmc page </h1>
            )
          }} />
          <Route path="/about" render={() => (
            <h1>About page</h1>
          )} />
          <Route path="/contact-us" render={() => (
            <h1>Contact us page</h1>
          )} />
          <Route path="/portfolios/:id?" component={Portfolios} />
          {/* </Switch> */}
        </div>
      </Router>
    );
  }
}

export default App;
