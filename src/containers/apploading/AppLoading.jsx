import React, { Component } from 'react';

export default class AppLoading extends Component {
    render() {
        return (
            <div id="loading-page">
                <h1 className="logo">CLUSTER<span className="eight">8</span></h1>
                <p>Loading... {this.props.status}%</p>
            </div>
        );
    }
}