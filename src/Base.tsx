import React, { Component } from 'react';
import {Switch, Route, RouteComponentProps, Link, Redirect} from 'react-router-dom';
import {initLocale, Paths, Locale, current, msg, Languages, pathname} from "./Static/Static";

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
    initLocale(this.props.history.location.pathname, langparam.lang);
  }

  render(){
    return (
      <div>Welcome to Dino's Blog
        <Link to={Paths.home()}replace>HOME</Link>
        <Link to={Paths.about()} replace>ABOUT ME</Link>
        <Link to={Paths.contact()} replace>CONTACT ME</Link>
        <Link to={Paths.blog()} replace>BLOG</Link>
        <Link to={Paths.changelocale(Languages.en())} replace>ENGLISH</Link>
        <Link to={Paths.changelocale(Languages.ceb())} replace>CEBUANO</Link>
        <Link to={Paths.changelocale(Languages.tl())} replace>TAGALOG</Link>
        <Link to={Paths.changelocale()} replace>DEFAULT</Link>
        <br/>{msg.home}
        <br/>{msg.ok}
        <br/>{msg.cancel}
        <br/>{msg.back}
      <Switch>
        <Route path={Paths.about()} render={()=>{return <p>ABOUT</p>}}/>
        <Route path={Paths.contact()}  render={()=>{return <p>CONTACT</p>}}/>
        <Route path={Paths.blog()}  render={()=>{return <p>BLOG</p>}}/>
        <Route path={Paths.admin()}  render={()=>{return <p>ADMIN</p>}}/>

        <Route exact path={Paths.home()}  render={()=>{return <p>HOME</p>}}/>
        <Route render={() => <p>NOT FOUND</p>}/>
      </Switch>
      </div>
    );
  }
}