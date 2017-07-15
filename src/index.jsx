import React from 'react';
import {render} from 'react-dom';
import {HashRouter, Route, Link, NavLink} from 'react-router-dom';
import Header from './components/header/Header.jsx';
import Main from './containers/main/Main.jsx';

//router
render(
    <HashRouter>
        <div id="clusterApp">
            <Header />
            <Main />
        </div>
    </HashRouter>,
    document.getElementById('app')
);