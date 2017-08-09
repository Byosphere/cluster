import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clone, isEqual } from 'lodash';
import { Card, CardHeader, CardTitle, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import validateUser from '../../validators/user';
import { addNotification } from '../../actions/notificationAction.jsx';
import { saveUser } from '../../actions/userRequests.jsx';

class UserProfileForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            initialUser: clone(props.user),
            user: props.user,
            errors: {},
            isLoading: false
        }

    }

    isValid() {
        const { errors, isValid } = validateUser(this.state.user);
        if (!isValid) {
            this.setState({ errors });
        }
        return isValid;
    }

    isDirty() {
        return !isEqual(this.state.initialUser, this.state.user);
    }

    save(e) {
        e.preventDefault();
        if (this.isDirty() && this.isValid()) {
            this.setState({ isLoading: true, errors: {} });
            this.props.saveUser(this.state.user).then(
                (user) => {
                    this.setState({ isLoading: false, user: user, initialUser: clone(user) });
                    this.props.addNotification("Your profile has been updated !", "success");
                },
                (err) => {
                    this.setState({ errors: { form: err }, isLoading: false });
                    if(this.state.errors.form) {
                        this.props.addNotification(this.state.errors.form,"error");
                    }
                }
            );
        }
    }

    reset(e) {
        e.preventDefault();
        this.setState({ user: clone(this.state.initialUser) });
    }

    render() {
        const user = this.state.user;
        return (

            <Card className="card" id="user-profile-form">
                <CardTitle className="title" title={(user.name ? user.name.first + " " + user.name.last : '')} subtitle="You can modify here your public profile. Having a good profile help to find a Cluster." />
                <CardText>
                    <DatePicker 
                    value={user.birthdate}
                    floatingLabelText="Date of birth" 
                    openToYearSelection={true} 
                    onChange={(e, date) => { user.birthdate = date; this.setState({ user: user })}}
                    errorText={this.state.errors.birthdate}
                    />
                </CardText>
                <CardActions>
                    <FlatButton disabled={this.state.isLoading || !this.isDirty()} label="Save" primary={true} onClick={this.save.bind(this)} />
                    <FlatButton disabled={this.state.isLoading} label="Reset" secondary={true} onClick={this.reset.bind(this)} />
                </CardActions>
            </Card>
        );
    }
}

export default connect(null, { saveUser, addNotification })(UserProfileForm);