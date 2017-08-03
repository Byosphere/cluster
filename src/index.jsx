import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import {HashRouter, Route, Link, NavLink} from 'react-router-dom';
import Header from './components/header/Header.jsx';
import Main from './containers/main/Main.jsx';
import Notification from './containers/notification/Notification.jsx';
import configureStore from './store.jsx';

const store = configureStore();
//router
render(
    <Provider store={store}>
        <HashRouter>
            <div id="clusterApp">
                <Notification props />
                <Header />
                <Main />
            </div>
        </HashRouter>
    </Provider>,
    document.getElementById('app')
);