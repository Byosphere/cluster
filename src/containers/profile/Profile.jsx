import React from 'react';
 
class Profile extends React.Component {

  constructor(props) {
      super(props);
  }

  render () {
    return (
        <div id="profile">
            <p>Bonjour {this.props.match.params.id}</p>
        </div>
    );
  }
}
 
export default Profile;