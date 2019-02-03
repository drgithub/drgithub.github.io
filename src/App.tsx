import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={"/:lng(en|lt)?"} component={Sample} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

class Sample extends Component{
  render(){
    return (
      <div>OH DUDE</div>
    );
  }
}