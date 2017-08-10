import React from 'react';
import { Get } from 'react-axios';
import { ScaleLoader } from 'halogen';
import ProfileImage from '../profileImage/ProfileImage.jsx';
import {Link} from 'react-router-dom';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';

class HeadProfile extends React.Component {

    constructor() {
        super();

        this.state = {
            display: '0'
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({display: '1'});
        }, 500);
    }

    render() {
        return (
            <div id="headProfile" style={{opacity: this.state.display}}>
                
                <Get url="https://randomuser.me/api/?results=7">
                    {(error, response, isLoading) => {
                        if (isLoading) {
                            return (
                                <div>
                                    <div key={i} className="profile-load">
                                        <div className="inner">
                                            <ScaleLoader color="#18ffff" size="60px" className="loader" />
                                        </div>
                                    </div>
                                </div>
                            );
                        } else if (response != null) {
                            var retour = [];

                            for (var i = 0; i < 7; i++) {
                                if (response.data.results[i]) {
                                    retour.push(
                                        <div key={i} className="profile">
                                            <div className="inner">
                                                <ProfileImage user={response.data.results[i]} />
                                            </div>
                                        </div>
                                    );
                                } else {
                                    retour.push(
                                        <div key={i} className="profile">
                                            <div className="inner empty">
                                                <Link to="/search"><ActionAccountCircle /></Link>
                                            </div>
                                        </div>
                                    );
                                }
                            }
                            retour.push(
                                <div key={"me"} className="profile user">
                                    <div className="inner">
                                        <ProfileImage user={this.props.user} isUser={true} />
                                    </div>
                                </div>
                            );
                            return <div>{retour}</div>;
                        }
                        return (<div></div>);
                    }}
                </Get>
            </div>
        );
    }
}

export default HeadProfile;