import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import View from './views/View';

class App extends Component {
  constructor() {
    super()
    this.browser = (function () {
      // Opera 8.0+
      var isOpera = (!!window.opr && !!window.opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
      // Firefox 1.0+
      var isFirefox = typeof InstallTrigger !== 'undefined';
      // Safari 3.0+ "[object HTMLElementConstructor]" 
      var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof window.safari !== 'undefined' && window.safari.pushNotification));
      // Internet Explorer 6-11
      var isIE = /*@cc_on!@*/false || !!document.documentMode;
      // Edge 20+
      var isEdge = !isIE && !!window.StyleMedia;
      // Chrome 1+
      var isChrome = !!window.chrome && !!window.chrome.webstore;
      // Blink engine detection
      var isBlink = (isChrome || isOpera) && !!window.CSS;
      return {
        isOpera,
        isFirefox,
        isSafari,
        isIE,
        isEdge,
        isChrome,
        isBlink
      }
    })()
    console.log(this.browser)
    if (this.browser.isFirefox) {
      // document.getElementById('scrollbar').style.display = 'none'
      let root = document.getElementById('root')
      let html = document.querySelector('html')
      console.log(html)
      html.style.width = 'calc(100vw - 17px)';
      html.style.height = '100vh'
      html.style.overflow = 'hidden'
    }
  }
  render = () => {
    return (
      <div id="App" className="App">
        <Switch>
          <Route exact path="/" component={View} />
          <Route path="/:view/:details" component={View} />
          <Route path="/:view" component={View} />
        </Switch>
      </div>
    )
  }
}

export default App;
