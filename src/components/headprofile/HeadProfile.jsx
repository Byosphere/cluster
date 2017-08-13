import React from 'react';
import { connect } from 'react-redux';
import { ScaleLoader } from 'halogen';
import ProfileImage from '../profileImage/ProfileImage.jsx';
import { Link } from 'react-router-dom';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';

class HeadProfile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            display: '0'
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ display: '1' });
        }, 500);
    }

    render() {

        return (
            <div id="headProfile" style={{ opacity: this.state.display }}>
                <div>
                    <div className="profile user">
                        <div className="inner">
                            <ProfileImage user={this.props.user} isUser={true} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeadProfile;