import React, { Component } from 'react';
import {BrowserRouter, HashRouter,Switch, Route} from 'react-router-dom';
import { Base } from './Base';

class App extends Component {
  render() {
    {/** SHIFT TO BROWSER ROUTER IF IN PRODUCTION, USE HASHROUTER IF USING GH PAGES */}
    return (
      // <BrowserRouter>
      <HashRouter>
        <Switch>
          <Route path={"/:lang?"} render={(props) => <Base {...props}/>} />
        </Switch>
      </HashRouter>
      // </BrowserRouter>
    );
  }
}

export default App;
