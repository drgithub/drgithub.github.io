import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { HashRouter, Route } from 'react-router-dom';
import { Base } from './Base';

ReactDOM.render(
<HashRouter>
    <Route path={"/:lang?"} render={(props) => <Base {...props}/>} />
</HashRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
