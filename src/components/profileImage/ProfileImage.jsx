import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import ActionTypes from '../../Constants';
// import { addNotification } from '../../actions/notificationAction.jsx';

class ProfileImage extends React.Component {

    constructor(props) {
        super(props);
    }

    // onClickProfile() {
    //     const { dispatch } = this.props;
    //     dispatch(addNotification(this.props.user.name.first, 'warning'));
    // }

    render() {
        return (
            <Link to={"/profile/"+this.props.user.name.first+this.props.user.name.last} className="img-wrapper profile-image">
                <img src={this.props.user.picture.large} alt="" />
            </Link>
        );
    }
}

export default connect() (ProfileImage);