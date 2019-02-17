import React, { Component} from "react";
import { RouteComponentProps, Link } from "react-router-dom";
import { Paths, msg, Languages } from "../../Static/Static";
export class FrontPage extends Component<{children?: any & RouteComponentProps}>{
    render() {
        return (
        <div className='sample'>Welcome to Dino's Blog
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
            {this.props.children}
        </div>
        );
    }
}