import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNotification } from '../actions/notificationAction.jsx';
import { Redirect } from 'react-router-dom';

export default function (ComposedComponent) {

    class Authenticate extends Component {

        componentWillMount() {
            if(!this.props.isAuthenticated) {
                this.props.addNotification('You must be connected to access this page', 'error');
            }
        }

        render() {
            if(this.props.isAuthenticated) {
                return (<ComposedComponent {...this.props} />);
            } else {
                return (<Redirect to="/home" />);
            }
        }
    }

    function mapStateToProps(state) {
        return {
            isAuthenticated: state.auth.isAuthenticated
        }
    }

    return connect(mapStateToProps, {addNotification}) (Authenticate);
}
