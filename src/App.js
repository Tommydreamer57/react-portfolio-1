import React, { Component } from 'react';
import logo from './components/assets/logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import View from './components/View';

class App extends Component {
  render = () => {
    return (
      <div id="App" className="App">
        <Switch>
          <Route exact path="/" component={View} />
          <Route path="/:view" component={View} />
        </Switch>
      </div>
    )
  }
}

export default App;
