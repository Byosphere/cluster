import React from 'react';
import {NavLink} from 'react-router-dom';
import HeadProfile from '../headProfile/HeadProfile.jsx';
import {browserHistory} from 'react-router';
 
class Header extends React.Component {

  constructor(props) {
    super(props);
    this._notificationSystem = null;
  }

  render () {
    return (
      <div>
        <header>
          <h1><NavLink to="/home">CLUSTER 8</NavLink></h1>
          <NavLink to="/home" className="navlink" activeClassName="active">HOME</NavLink>
          <NavLink to="/mycluster" className="navlink" activeClassName="active">CLUSTER</NavLink>
          <NavLink to="/profile" className="navlink" activeClassName="active">PROFILE</NavLink>
          <HeadProfile />
          <NavLink to="/parameters" className="navIcon" activeClassName="active"><img src="../../../public/images/icons/parameters.svg" alt="parameters_icon"/></NavLink>
        </header>
         {/* <button onClick={(e) => this._addNotifications(e)}>Add notification</button>  */}
      </div>
    );
  }
}
 
export default Header;