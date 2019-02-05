import React, { Component } from 'react';
import {Switch, Route, RouteComponentProps, Link} from 'react-router-dom';
import {initLocale, Paths, Locale, current, msg} from "./Locale/Locale";

type Props = {} & RouteComponentProps;
type State = {locale: Locale};
export class Base extends Component<Props, State>{
  constructor(props: RouteComponentProps) {
    super(props);
    this.propUpdate();
    this.state = {locale: current}
  }

  componentDidUpdate(props:Props) {
    if(this.props !== props){
      this.propUpdate();
      this.setState({locale: current});
    }
  }

  propUpdate(){
    const langparam: {lang?: string} = this.props.match.params;
    initLocale(this.props.match.url, langparam.lang);
  }

  render(){

    return (
      <div>Welcome to Dino's Blog
        <Link to={Paths.home()}replace>HOME</Link>
        <Link to={Paths.about()} replace>ABOUT ME</Link>
        <Link to={Paths.contact()} replace>CONTACT ME</Link>
        <Link to={Paths.blog()} replace>BLOG</Link>
        <Link to={'/en'} >ENGLISH</Link>
        <Link to={'/ceb'} >CEBUANO</Link>
        <Link to={'/tl'} >TAGALOG</Link>
        <br/>{msg.home}
        <br/>{msg.ok}
        <br/>{msg.cancel}
        <br/>{msg.back}
      <Switch>
        <Route path={Paths.about()} render={()=>{return <p>ABOUT</p>}}/>
        <Route path={Paths.contact()}  render={()=>{return <p>CONTACT</p>}}/>
        <Route path={Paths.blog()}  render={()=>{return <p>BLOG</p>}}/>
        <Route path={Paths.admin()}  render={()=>{return <p>ADMIN</p>}}/>
        <Route path={Paths.home()}  render={()=>{return <p>HOME</p>}}/>
      </Switch>
      </div>
    );
  }
}