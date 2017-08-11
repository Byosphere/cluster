import React from 'react';
import { NavLink } from 'react-router-dom';
import HeadProfile from '../headprofile/HeadProfile.jsx';
import HeadLogin from '../headlogin/HeadLogin.jsx';
import { connect } from 'react-redux';
import { logout } from '../../actions/loginActions.jsx';
import FlatButton from 'material-ui/FlatButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import Close from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import { white } from 'material-ui/styles/colors';
import MenuItem from 'material-ui/MenuItem';
import Badge from 'material-ui/Badge';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hasCluster: true,
            nbMember: 4,
            drawerOpen: false
        }
    }

    logout(e) {
        e.preventDefault();
        this.props.logout();
        this.context.router.history.push('/home');
    }

    handleToggle(e) {
        e.preventDefault();
        this.setState({ drawerOpen: !this.state.drawerOpen });
    }

    render() {
        const isConnected = this.props.auth.isAuthenticated;

        return (
            <header>
                <Drawer open={this.state.drawerOpen} containerStyle={{ top: '64px' }}>
                    <MenuItem><NavLink to="/home" className="menuLink" activeClassName="active">Home</NavLink></MenuItem>
                </Drawer>
                <IconButton className="drawerButton" onTouchTap={this.handleToggle.bind(this)}>
                    {!this.state.drawerOpen && <Menu color={white} />}
                    {this.state.drawerOpen && <Close color={white} />}
                </IconButton>
                <h1><NavLink to="/home">CLUSTER 8</NavLink></h1>
                <NavLink to="/home" className="navlink" activeClassName="active">HOME</NavLink>
                {isConnected && <div className="connected-menu">
                    <Badge badgeStyle={{display:this.state.nbMember ? 'flex' : 'none', top:'3px'}} style={{padding:0}} badgeContent={this.state.nbMember} primary={true}>
                        <NavLink to="/cluster" className={!this.state.hasCluster ? 'navlink disabled' : 'navlink'} activeClassName="active">CLUSTER</NavLink>
                    </Badge>
                    <NavLink to="/profile" className="navlink" activeClassName="active">PROFILE</NavLink>
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
        auth: state.auth
    }
}

Header.contextTypes = {
    router: React.PropTypes.object
}

export default connect(mapStateToProps, { logout }, undefined, { pure: false })(Header);