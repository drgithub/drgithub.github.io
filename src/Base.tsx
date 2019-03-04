import React, { Component } from 'react';
import {Switch, Route, RouteComponentProps,} from 'react-router-dom';
import {initLocale, Paths, setPathName, msg,} from "./Static/Static";
import { FrontPage } from './Components/PageComponents/FrontPage';

export class Base extends Component<RouteComponentProps, {changes: boolean}>{
  constructor(props: RouteComponentProps) {
    super(props);
    this.updateLocale();
    this.state = {changes: true};
  }

  componentDidUpdate(props:RouteComponentProps) {
    if (this.props !== props) {
      const cur = this.props.match.url.split('/')[1];
      const prev = props.match.url.split('/')[1];
      const matcha = cur.length > 3 ? '' : cur;
      const matchb = prev.length > 3 ? '' : prev;
      if (matcha !== matchb) {
        console.log('Updating Locale to', matcha === '' ? 'default' : matcha);
        this.updateLocale();
      } else
      setPathName(this.props.history);
      this.setState({changes: !this.state.changes});
    }
  }

  updateLocale() {
    const langparam: {lang?: string} = this.props.match.params;
    initLocale(langparam.lang);
    setPathName(this.props.history);
  }

  render() {
    return (
      <Switch>
        <Route path={Paths.about()} component={() => <FrontPage>ABOUT {msg.back}</FrontPage>}/>
        <Route path={Paths.contact()} component={() => <FrontPage>CONTACT {msg.home}</FrontPage>}/>
        <Route path={Paths.blog()}  component={() => <FrontPage>BLOG {msg.ok}</FrontPage>}/>
        <Route path={Paths.admin()}component={() => <FrontPage>ADMIN {msg.home}</FrontPage>}/>

        <Route exact path={Paths.home()} component={() => <FrontPage>HOME {msg.cancel}</FrontPage>}/>
        <Route render={() => <p>NOT FOUND</p>}/>
      </Switch>
    );
  }
}