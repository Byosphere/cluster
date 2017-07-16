import React from 'react';
import NotificationSystem from 'react-notification-system';
 
class Header extends React.Component {

  constructor(props) {
    super(props);
    this._notificationSystem = null;
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
          
        </header>
        {/* <button onClick={(e) => this._addNotifications(e)}>Add notification</button> */}
        <NotificationSystem ref="notificationSystem" />
      </div>
    );
  }
}
 
export default Header;