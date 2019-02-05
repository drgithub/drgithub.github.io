import React, { Component } from 'react';
import {Switch, Route, RouteComponentProps, Router, Link} from 'react-router-dom';
import {initLocale, getLink, PathsDB, Locale, current} from "./Locale/Locale";

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
        <Link to={getLink(PathsDB.home,{id:10})} replace>HOME</Link>
        <Link to={getLink(PathsDB.about)} replace>ABOUT ME</Link>
        <Link to={getLink(PathsDB.contact)} replace>CONTACT ME</Link>
        <Link to={getLink(PathsDB.blog)} replace>BLOG</Link>
        <Link to={'/en'} >ENGLISH</Link>
        <Link to={'/ceb'} >CEBUANO</Link>
        <Link to={'/tl'} >TAGALOG</Link>
      <Switch>
        <Route path={getLink(PathsDB.about)} render={()=>{return <p>ABOUT</p>}}/>
        <Route path={getLink(PathsDB.contact)}  render={()=>{return <p>CONTACT</p>}}/>
        <Route path={getLink(PathsDB.blog)}  render={()=>{return <p>BLOG</p>}}/>
        <Route path={getLink(PathsDB.admin)}  render={()=>{return <p>ADMIN</p>}}/>
        <Route path={getLink(PathsDB.home)}  render={()=>{return <p>HOME</p>}}/>
      </Switch>
      </div>
    );
  }
}