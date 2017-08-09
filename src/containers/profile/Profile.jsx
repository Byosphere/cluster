import React from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardTitle, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { getUserById } from '../../actions/userRequests.jsx';
import UserProfileForm from '../../components/userprofileform/UserProfileForm.jsx';

class Profile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            paramsId: '',
            user: {}
        }

        this.isAuthUser.bind(this);

    }

    isAuthUser(props) {
        if(!this.props.auth.isAuthenticated) return false;
        return props.match.params.id == undefined || this.props.auth.user.id == props.match.params.id;
    }

    componentWillMount() {

        if (!this.isAuthUser(this.props)) {

            this.props.getUserById(this.props.match.params.id).then((user) => {
                this.setState({ paramsId: this.props.match.params.id, user: user });
            });

        } else {
            this.setState({ paramId: this.props.auth.user.id, user: this.props.auth.user });
        }

    }

    componentWillReceiveProps(newProps) {

        if (!this.isAuthUser(newProps)) {
            this.props.getUserById(this.props.match.params.id).then((user) => {
                this.setState({ paramsId: this.props.match.params.id, user: user });

            });
        } else {
            this.setState({ paramId: this.props.auth.user.id, user: this.props.auth.user });
        }
    }

    renderAuthUserProfile(user) {
        return (
            <UserProfileForm user={user} />
        );
    }

    renderUserProfile(user) {
        return (
            <Card className="card">
                <CardTitle className="title" title={(user.name ? user.name.first + " " + user.name.last : '')} subtitle="" />
                <CardText>
                    <div>
                        <img src={user.picture ? user.picture.large : ''} alt={(user.name ? user.name.first + " " + user.name.last : '') + "'s Profile"} />
                    </div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
            </Card>
        );
    }

    render() {

        const user = this.state.user;
        let content;

        if (this.isAuthUser(this.props)) {
            content = this.renderAuthUserProfile(user);
        } else {
            content = this.renderUserProfile(user);
        }

        return (
            <div id="profile">
                <div className="main-content">
                    {content}
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