import React, { Component } from 'react';
import {BrowserRouter,HashRouter, Switch, Route, RouteComponentProps, Router} from 'react-router-dom';
import {initLocale, localeCode, msg} from "./Locale/Locale";

class App extends Component {
  render() {
    {/** SHIFT TO BROWSER ROUTER IF IN PRODUCTION, USE HASHROUTER IF USING GH PAGES */}
    return (
      <BrowserRouter>
        <Switch>
          <Route path={"/:lang?"} render={(props) => <Base {...props}/>} />
        </Switch>
      </BrowserRouter>
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
    const base = `/${localeCode}`; 
    const basepath = base === this.props.match.url && base || '';
    
    return (
      <div>Welcome to Dino's Blog 
      <Switch>
        <Route path={`${basepath}/about`} render={()=>{return <p>ABOUT</p>}}/>
        <Route path={`${basepath}/contact`}  render={()=>{return <p>CONTACT</p>}}/>
        <Route path={`${basepath}/blog`}  render={()=>{return <p>BLOG</p>}}/>
      </Switch>
      </div>
    );
  }
}
