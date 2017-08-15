import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';
import GroupWork from 'material-ui/svg-icons/action/group-work';
import { STATUS_LIST } from '../../Constants';
import Avatar from 'material-ui/Avatar';
import Flag from '../flag/Flag.jsx';
import Chip from 'material-ui/Chip';

class HeadProfile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            display: '0',
            status: STATUS_LIST[0]
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ display: '1' });
        }, 500);
    }

    setStatus(e, i, v) {
        e.preventDefault();
        this.setState({ status: v });
    }

    handleTouch() {

    }

    render() {

        const user = this.props.user;

        return (
            <div id="headProfile" style={{ opacity: this.state.display }}>
                <div className="status">
                    <div>
                        <p>Hello, {user.username}</p>
                        {/* <RadioButtonGroup name="shipSpeed" defaultSelected="not_light" className="radio-status">
                            <RadioButton
                                value="light"
                                label=""
                                style={{width:'auto'}}
                            />
                            <RadioButton
                                value="light"
                                label=""
                                style={{width:'auto'}}
                            />
                            <RadioButton
                                value="light"
                                label=""
                                style={{width:'auto'}}
                            />
                        </RadioButtonGroup> */}
                    </div>
                    {user.clusterId && <div className='cluster'>
                        <div className='avatar-group'>
                            <Flag nat='fr' size={30} />
                            <Avatar src="../../../../public/images/images/main.jpg" size={30} />
                        </div>
                        <div className='avatar-group'>
                            <Flag nat='fr' size={30} />
                            <Avatar src="../../../../public/images/images/main.jpg" size={30} />
                        </div>
                    </div>}
                     {!user.clusterId && <Link to="/search"> <Chip labelColor="#FFF" backgroundColor="#FF5722" onTouchTap={this.handleTouch.bind(this)}>
                        <Avatar color="#FFF" icon={<GroupWork />} backgroundColor="#E64A19" />
                        Find a Cluster
                    </Chip></Link>} 
                </div>
                <div className="user">
                    <div className="inner">
                        <Link to="/profile" className="img-wrapper profile-image">
                            {/* <Flag className="flag" nat={user.country} /> */}
                            <img src={user.profilepicture ? user.profilepicture : '../../../../public/images/images/main.jpg'} alt="profile picture" />
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeadProfile;