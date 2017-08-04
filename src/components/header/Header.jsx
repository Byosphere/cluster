import React from 'react';
import {NavLink} from 'react-router-dom';
import HeadProfile from '../headProfile/HeadProfile.jsx';
import HeadLogin from '../headlogin/HeadLogin.jsx';
 
class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isConnected: false,
      hasCluster: false
    }
  }

  render () {
    return (
      <div>
        <header>
          <h1><NavLink to="/home">CLUSTER 8</NavLink></h1>
          <NavLink to="/home" className="navlink" activeClassName="active">HOME</NavLink>
          {this.state.isConnected && <div className="connected-menu">
            <NavLink to="/mycluster" className={!this.state.hasCluster ? 'navlink disabled' : 'navlink'} activeClassName="active">CLUSTER</NavLink>
            <NavLink to="/profile" className="navlink" activeClassName="active">PROFILE</NavLink>
            <HeadProfile />
          </div>}
          {!this.state.isConnected &&<div className="disconnected-menu">
            <NavLink to="/signup" className="navlink" activeClassName="active">SIGN UP</NavLink>
          </div>}
          <NavLink to="/more" className="navlink" activeClassName="active">LEARN MORE</NavLink>
          <HeadLogin />
        </header>
      </div>
    );
  }
}
 
export default Header;