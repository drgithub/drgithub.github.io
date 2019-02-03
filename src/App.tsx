import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, RouteComponentProps} from 'react-router-dom';
import {List} from "immutable";

type Locale = {
  name  : string,
  code  : string,
  active : boolean 
}

const languages: List<Locale> = List([
  {name : "Cebuano",  code: "ceb",  active: true},
  {name : "Tagalog",  code: "tl",   active: true},
  {name : "English",  code: "en",   active: true},
  {name : "Spanish",  code: "es",   active: true},
  {name : "German",   code: "de",   active: true}, 
])
class App extends Component {
  langlist: string = languages.map((lang)=> lang.active && lang.code).toArray().join("|");
  parameter: string = ["/:lang(" + this.langlist  + ")?"].join("");

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={this.parameter} render={(props) => <Base {...props}/>} />
          <Route component={BaseError} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
type Props = {} & RouteComponentProps;
type State = {
  locale: Locale;
}
class Base extends Component<Props, State>{
  constructor(props: RouteComponentProps) {
    super(props);
    const langparam: {lang?: string} = this.props.match.params;
    const locale: Locale = languages.filter((value: Locale) => value.code === langparam.lang).first();
    const alocale: Locale | undefined = languages.find((value: Locale) => value.active);
    this.state = {
      locale: locale || alocale
    };
  }

  render(){
    
    return (
      <div>OH DUDE {this.state.locale.code}</div>
    );
  }
}

class BaseError extends Component{
  render(){
    return(
      <div>EH :P</div>
    );
  }
}