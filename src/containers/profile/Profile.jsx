import React from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardTitle, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import UserProfileForm from '../../components/userprofileform/UserProfileForm.jsx';
import { Redirect } from 'react-router-dom';
import { Tabs, Tab } from 'material-ui/Tabs';
import { getUserById } from '../../actions/userRequests.jsx';
import { RingLoader } from 'halogen';

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: undefined,
            selectedTab: props.match.params.tab || 'user'
        }
    }

    componentWillMount() {
        console.log(this.state.user);
        if (this.props.auth.isAuthenticated && !this.state.user) {
            this.props.getUserById(this.props.auth.user.sub).then(
                (res) => {
                    this.setState({ user: res });
                },
                (err) => {
                    console.log("error");
                }
            );
        }
    }

    handleChange(value) {
        //this.props.history.push('/profile/' + value);
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
                        {user && <Tabs value={this.state.selectedTab} onChange={this.handleChange.bind(this)}>
                            <Tab label={user.firstname + " " + user.lastname} value="user">
                                <UserProfileForm user={user} />
                            </Tab>
                            <Tab label="Search" value="search">
                                qsdqd
                            </Tab>
                            <Tab label="Parameters" value="params">
                                sqdqsd
                            </Tab>
                        </Tabs>}
                        {!user && <RingLoader color="#18ffff" size="100px" className="loader" />}
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

export default connect(mapStateToProps, { getUserById })(Profile);