import React from 'react';
import { Link } from 'react-router-dom';

class ProfileImage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let link = '';
        if (this.props.isUser) {
            link = "/profile";
        } else {
            link = "/profile/" + this.props.user.name.first + this.props.user.name.last;
        }

        return (
            <Link to={link} className="img-wrapper profile-image">
                <img src='../../../../public/images/images/main.jpg' alt="" />
                {/* <img src={this.props.user.profilepicture ? this.props.user.profilepicture : '../../../../public/images/images/main.jpg'} alt="" /> */}
            </Link>
        );
    }
}

export default ProfileImage;