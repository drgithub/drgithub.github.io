import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, RouteComponentProps} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Route exact path={"/:lng(en|tl|ceb)?"} render={(props) => <Language {...props}/>} />
      </BrowserRouter>
    );
  }
}

export default App;

class Language extends Component<any, any>{
  constructor(props: RouteComponentProps) {
    super(props);
  }

  render(){
    const lang: {lng?: string} = this.props.match.params;
    return (
      <div>OH DUDE {lang.lng}</div>
    );
  }
}