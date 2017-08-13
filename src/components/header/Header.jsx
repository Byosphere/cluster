import React from 'react';
import { NavLink } from 'react-router-dom';
import HeadProfile from '../headprofile/HeadProfile.jsx';
import HeadLogin from '../headlogin/HeadLogin.jsx';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';
import FlatButton from 'material-ui/FlatButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import Close from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import { white } from 'material-ui/styles/colors';
import MenuItem from 'material-ui/MenuItem';
import Badge from 'material-ui/Badge';
import LockOutline from 'material-ui/svg-icons/action/lock-outline';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nbNotif: 0,
            drawerOpen: false
        }
    }

    logout(e) {
        e.preventDefault();
        this.props.logout();
        this.context.router.history.push('/');
    }

    handleToggle(e) {
        e.preventDefault();
        this.setState({ drawerOpen: !this.state.drawerOpen });
    }

    render() {
        const isConnected = this.props.auth.isAuthenticated;
        const user = this.props.auth.user;

        return (
            <header>
                <Drawer open={this.state.drawerOpen} containerStyle={{ top: '64px' }}>
                    <MenuItem><NavLink exact to="/" className="menuLink" activeClassName="active">Home</NavLink></MenuItem>
                    {isConnected && <MenuItem><NavLink to="/profile" className="menuLink" activeClassName="active">Profile</NavLink></MenuItem>}
                    {isConnected && <MenuItem disabled={!user.clusterId}><NavLink to="/cluster" className={!user.clusterId ? 'menuLink disabled' : 'navlink'} activeClassName="active">Cluster</NavLink></MenuItem>}
                </Drawer>
                <IconButton className="drawerButton" onTouchTap={this.handleToggle.bind(this)}>
                    {!this.state.drawerOpen && <Menu color={white} />}
                    {this.state.drawerOpen && <Close color={white} />}
                </IconButton>
                <h1 className="logo"><NavLink exact to="/">CLUSTER<span className="eight">8</span></NavLink></h1>
                <NavLink exact to="/" className="navlink" activeClassName="active">HOME</NavLink>
                {isConnected && <div className="connected-menu">
                    <Badge badgeStyle={{ display: this.state.nbNotif ? 'flex' : 'none', top: '3px' }} style={{ padding: 0 }} badgeContent={this.state.nbNotif} primary={true}>
                        <NavLink to="/cluster" className={!user.clusterId ? 'navlink disabled' : 'navlink'} activeClassName="active">CLUSTER</NavLink>
                    </Badge>
                    <NavLink to="/profile" className="navlink" activeClassName="active">PROFILE</NavLink>
                    <NavLink to="/parameters" className="navlink" activeClassName="active">Options</NavLink>
                    <HeadProfile user={user} hasCluster={!user.clusterId} />
                    <IconButton iconStyle={{ fill: '#F44336' }} onClick={this.logout.bind(this)} style={{ position: 'absolute', right: '.5rem', top: '.5rem' }} tooltip="Logout" touch={true} tooltipPosition="bottom-center">
                        <LockOutline />
                    </IconButton>
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
        auth: state.auth
    }
}

Header.contextTypes = {
    router: React.PropTypes.object
}

export default connect(mapStateToProps, { logout }, undefined, { pure: false })(Header);