import React from 'react';
import { NavLink } from 'react-router-dom';
import HeadProfile from '../headProfile/HeadProfile.jsx';
import HeadLogin from '../headlogin/HeadLogin.jsx';
import { connect } from 'react-redux';
import { logout } from '../../actions/loginActions.jsx';
import FlatButton from 'material-ui/FlatButton';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            hasCluster: false
        }
    }

    logout(e) {
        e.preventDefault();
        this.props.logout();

    }

    render() {
        const isConnected = this.props.auth.isAuthenticated;

        return (
            <header>
                <h1><NavLink to="/home">CLUSTER 8</NavLink></h1>
                <NavLink to="/home" className="navlink" activeClassName="active">HOME</NavLink>
                {isConnected && <div className="connected-menu">
                    <NavLink to="/mycluster" className={!this.state.hasCluster ? 'navlink disabled' : 'navlink'} activeClassName="active">CLUSTER</NavLink>
                    <NavLink exact to="/profile" className="navlink" activeClassName="active">PROFILE</NavLink>
                    <NavLink to="/parameters" className="navlink" activeClassName="active">Options</NavLink>
                    <HeadProfile user={this.props.auth.user} hasCluster={this.state.hasCluster} />
                    <FlatButton style={{ position: 'absolute', right: '.5rem', top: '14px' }} label="Logout" secondary={true} onClick={this.logout.bind(this)} />
                </div>}
                <NavLink to="/more" className="navlink" activeClassName="active">LEARN MORE</NavLink>
                {!isConnected && <div className="disconnected-menu">
                    <NavLink to="/signup" className="navlink" activeClassName="active">SIGN UP</NavLink>
                    <HeadLogin />
                </div>}
            </header>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth:state.auth
    }
}

export default connect(mapStateToProps, { logout }, undefined, { pure: false }) (Header);