import React from 'react';
 
class Profile extends React.Component {

  constructor(props) {
      super(props);
  }

  render () {
    return (
        <div id="profile">
            <div className="main-content">
                <h2>Profile</h2>
                <hr/>
            </div>
        </div>
    );
  }
}
 
export default Profile;