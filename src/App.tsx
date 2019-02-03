import React, { Component } from 'react';
import {HashRouter, Switch, Route, RouteComponentProps} from 'react-router-dom';
import {Languages, initLocale, msg} from "./Locale/Locale";

class App extends Component {
  langlist: string = Languages.map((lang)=> lang.active && lang.code).toArray().join("|");
  parameter: string = ["/:lang(" + this.langlist  + ")?"].join("");

  render() {
    {/** SHIFT TO BROWSER ROUTER IF IN PRODUCTION, USE HASHROUTER IF USING GH PAGES */}
    return (
      <HashRouter>
        <Switch>
          <Route exact path={this.parameter} render={(props) => <Base {...props}/>} />
          <Route component={BaseError} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
type Props = {} & RouteComponentProps;
class Base extends Component<Props>{
  constructor(props: RouteComponentProps) {
    super(props);
    const langparam: {lang?: string} = this.props.match.params;
    initLocale(langparam.lang);
  }

  render(){
    return (
      <div>{msg.home}{msg.back}</div>
    );
  }
}

class BaseError extends Component{
  constructor(props: any){
    super(props);
    initLocale();
  }
  render(){
    return(
      <div>{msg.back}</div>
    );
  }
}