import React from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardTitle, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import UserProfileForm from '../../components/userprofileform/UserProfileForm.jsx';
import { Redirect } from 'react-router-dom';
import { Tabs, Tab } from 'material-ui/Tabs';

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: props.auth.user,
            selectedTab: props.match.params.tab || 'user'
        }
    }

    handleChange(value) {
        this.props.history.push('/profile/'+value);
        this.setState({
            selectedTab: value
        });
    }

    render() {

        const user = this.state.user;

        return (
            <div id="profile">
                <div className="main-content">
                    <Card className="card">
                        <Tabs value={this.state.selectedTab} onChange={this.handleChange.bind(this)}>
                            <Tab label={user.name.first + " " + user.name.last} value="user">
                                <UserProfileForm user={user} />
                            </Tab>
                            <Tab label="Search" value="search">
                                qsdqd
                            </Tab>
                            <Tab label="Parameters" value="params">
                                sqdqsd
                            </Tab>
                        </Tabs>
                    </Card>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Profile);