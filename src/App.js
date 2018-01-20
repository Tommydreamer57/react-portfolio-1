import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
// import TransitionGroup from 'react-transition-group/TransitionGroup';
import About from './components/views/About/About';
import Skills from './components/views/Skills/Skills';
import Projects from './components/views/Projects/Projects';
import Contact from './components/views/Contact/Contact';

import View from './components/View';
// import Slide from './components/Slide';

// const firstChild = props => {
//   const childrenArray = React.Children.toArray(props.children)
//   return childrenArray || null
// }

class App extends Component {
  render = () => {
    return (
      <div id="App" className="App">
        <Switch>
          <Route exact path="/" component={View} />
          <Route path="/:view" component={View} />
        </Switch>
      </div>
    );
  }
}

export default App;
