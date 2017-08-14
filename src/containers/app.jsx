import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/header/Header.jsx';
import Main from './main/Main.jsx';
import Footer from './footer/Footer.jsx';
import Notification from './notification/Notification.jsx';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import { setAuthUser, getAuthUser } from '../actions/authActions';
import jwt from 'jsonwebtoken';
import AppLoading from './apploading/AppLoading.jsx';
import { addNotification } from '../actions/notificationAction.jsx';
import { HashRouter } from 'react-router-dom';

class App extends Component {

    constructor() {
        super();

        this.state = {
            isLoading: true,
            status: 0
        }
    }

    componentWillMount() {
        if (localStorage.jwtToken) {
            setAuthorizationToken(localStorage.jwtToken);
            getAuthUser().then((user) => {
                this.props.store.dispatch(setAuthUser(user));
                this.setState({ status: 100, isLoading: false });
            },
                (err) => {
                    this.props.store.dispatch(setAuthUser());
                    setAuthorizationToken();
                    localStorage.removeItem('jwtToken');
                    this.setState({ status: 100, isLoading: false });
                    this.props.addNotification("User session expired", 'error');
                }
            );
        } else {
            this.setState({ isLoading: false });
        }
    }

    render() {
        if (this.state.isLoading) {
            return (<AppLoading status={this.state.status} />);
        } else {
            return (
                <HashRouter>
                    <div id="clusterApp">
                        <Notification props />
                        <Header />
                        <Main />
                        <Footer />
                    </div>
                </HashRouter>
            );
        }
    }
}

export default connect(null, { addNotification }) (App);