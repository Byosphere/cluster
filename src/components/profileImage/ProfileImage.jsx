import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import ActionTypes from '../../Constants';
// import { addNotification } from '../../actions/notificationAction.jsx';

class ProfileImage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let link = '';
        if(this.props.isUser) {
            link = "/profile";
        } else {
            link = "/profile/"+this.props.user.name.first+this.props.user.name.last;
        }

        return (
            <Link to={link} className="img-wrapper profile-image">
                <img src={this.props.user.picture ? this.props.user.picture.large : '../../../../public/images/images/main.jpg'} alt="" />
            </Link>
        );
    }
}

export default connect() (ProfileImage);