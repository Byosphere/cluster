import React from 'react';
import ActionTypes from '../../Constants';
import Dispatcher from '../../Dispatcher';
import HeaderActions from '../../actions/HeaderActions'

class ProfileImage extends React.Component {

    constructor(props) {
        super(props);
    }

    onClickProfile() {
        HeaderActions.sendNotification(this.props.user.name.first);
    }

    render() {
        return (
            <div className="img-wrapper" onClick={(e) => this.onClickProfile()}>
                <img src={this.props.user.picture.large} alt="" />
            </div>
        );
    }
}

export default ProfileImage;