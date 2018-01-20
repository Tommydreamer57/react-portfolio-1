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
  constructor(props) {
    super(props)
    this.state = {
      history: ['About']
    }
  }
  pushHistory = view => {
    let { history } = this.state
    history.push(view)
    this.setState({
      history
    })
  }
  render = () => {
    return (
      <div id="App" className="App">

        <Switch>
          <Route exact path="/" component={View} />
          <Route path="/:view" component={View} />
        </Switch>

        <div className="Navbar" style={{ zIndex: 100 }}>
          <Link to="/">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* <Switch>
          <Route exact path="/" render={() => (
            <Slide current={About} history={this.state.history} />
          )} />
          <Route path="/skills" render={() => (
            <Slide current={Skills} history={this.state.history} />
          )} />
          <Route path="/projects" render={() => (
            <Slide current={Projects} history={this.state.history} />
          )} />
          <Route path="/contact" render={() => (
            <Slide current={Contact} history={this.state.history} />
          )} /> */}
        {/* <Route exact path="/" children={({ match, ...rest }) => (
            <TransitionGroup component={firstChild}>
              {match && <About {...rest} />}
            </TransitionGroup>
          )} />
          <Route path="/skills" children={({ match, ...rest }) => (
            <TransitionGroup component={firstChild}>
              {match && <Skills {...rest} />}
            </TransitionGroup>
          )} /> */}
        {/* </Switch> */}
      </div>
    );
  }
}

export default App;
