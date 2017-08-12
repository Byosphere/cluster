import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route, Link, NavLink } from 'react-router-dom';
import Header from './components/header/Header.jsx';
import Main from './containers/main/Main.jsx';
import Footer from './containers/footer/Footer.jsx';
import Notification from './containers/notification/Notification.jsx';
import configureStore from './store.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { setAuthUser } from './actions/loginActions.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
import setAuthorizationToken from './Utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';

injectTapEventPlugin();

const store = configureStore();

if (localStorage.jwtToken) {
    setAuthorizationToken(localStorage.jwtToken);
    store.dispatch(setAuthUser(jwt.decode(localStorage.jwtToken)));
}

//router
render(
    <MuiThemeProvider>
        <Provider store={store}>
            <HashRouter>
                <div id="clusterApp">
                    <Notification props />
                    <Header />
                    <Main />
                    <Footer />
                </div>
            </HashRouter>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('app')
);