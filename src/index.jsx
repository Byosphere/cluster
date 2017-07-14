import React from 'react';
import {render} from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';
import Home from './containers/Home.jsx';
import Profile from './containers/Profile.jsx';
 
render(<Home />, document.getElementById('app'));

//router
render(
    <HashRouter>
        <Route path="/" component={Home} />
        <Route path="/profile" component={Profile}/>
    </HashRouter>,
    document.getElementById('app')
);