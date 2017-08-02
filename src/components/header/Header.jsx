import React from 'react';
import NotificationSystem from 'react-notification-system';
import {NavLink} from 'react-router-dom';
import HeadProfile from '../headProfile/HeadProfile.jsx';
import {browserHistory} from 'react-router';
 
class Header extends React.Component {

  constructor(props) {
    super(props);
    this._notificationSystem = null;
    this.browserHistory = browserHistory;
  }

  _addNotifications(event) {
    event.preventDefault();
    this._notificationSystem.addNotification({
      message: 'Notification message',
      level: 'success'
    });
  }

  componentDidMount() {
    this._notificationSystem = this.refs.notificationSystem;
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
        <NotificationSystem ref="notificationSystem" />
      </div>
    );
  }
}
 
export default Header;