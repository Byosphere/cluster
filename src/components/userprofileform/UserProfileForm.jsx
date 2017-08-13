import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clone, isEqual } from 'lodash';
import { Card, CardHeader, CardTitle, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import { addNotification } from '../../actions/notificationAction.jsx';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { COUNTRY_CODES } from '../../Constants';
import Flag from '../../components/flag/Flag.jsx';
import FileInput from '../../components/fileinput/FileInput.jsx';
import Subheader from 'material-ui/Subheader';
import validator from 'validator';
import { isEmpty } from 'lodash';
import { update } from '../../actions/authActions';
import ErrorIcon from 'material-ui/svg-icons/alert/error';

class UserProfileForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newUser: clone(props.user),
            user: props.user,
            errors: {},
            isLoading: false
        }
        this.onChange = this.onChange.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.save = this.save.bind(this);
    }

    onChange(e) {
        var u = this.state.newUser;
        u[e.target.name] = e.target.value;
        this.setState({ newUser: u });
    }

    onSelect(e, i, v) {
        var u = this.state.newUser;
        u.country = v;
        this.setState({ newUser: u });
    }

    isValid() {
        var errors = {};
        if (!this.state.newUser.country) errors.country = "This field is required";
        if (!this.state.newUser.firstname) errors.firstname = "This field is required";
        if (!this.state.newUser.lastname) errors.lastname = "This field is required";
        if (this.state.newUser.firstname && !validator.isAlpha(this.state.newUser.firstname)) errors.firstname = "This field can contain only letters";
        if (this.state.newUser.lastname && !validator.isAlpha(this.state.newUser.lastname)) errors.lastname = "This field can contain only letters";

        this.setState({ errors: errors });
        return isEmpty(errors);
    }

    isDirty() {
        return !isEqual(this.state.newUser, this.state.user);
    }

    save(e) {
        e.preventDefault();
        if (this.isDirty() && this.isValid()) {
            this.setState({ isLoading: true, errors: {} });
            this.props.update(this.state.newUser).then(
                (user) => {
                    this.setState({isLoading: false, newUser: user, user: this.props.user});
                    this.props.addNotification("Profile updated successfully","success");
                },
                (err) => {
                    this.setState({ errors: { form: err.message }, isLoading: false });
                }
            ).catch(
                (err) => {
                    this.setState({ errors: { form: err.message }, isLoading: false });
                }
            );
        }
        // if (this.isDirty() && this.isValid()) {
        //     this.setState({ isLoading: true, errors: {} });
        //     this.props.saveUser(this.state.user).then(
        //         (user) => {
        //             this.setState({ isLoading: false, user: user, initialUser: clone(user) });
        //             this.props.addNotification("Your profile has been updated !", "success");
        //         },
        //         (err) => {
        //             this.setState({ errors: { form: err }, isLoading: false });
        //             if(this.state.errors.form) {
        //                 this.props.addNotification(this.state.errors.form,"error");
        //             }
        //         }
        //     );
        // }
    }

    reset(e) {
        e.preventDefault();
        this.setState({ newUser: clone(this.props.user) });
    }

    render() {
        const user = this.state.newUser;
        return (
            <div id="user-profile-form">
                <CardTitle className="title" title={user.username + " (" + user.firstname + " " + user.lastname + ")"} subtitle="You can modify here your public profile. Having a good profile help to find a Cluster." />
                <CardText>
                    {this.state.errors.form && <Subheader className="error" style={{ margin: 0 }}><ErrorIcon style={{ color: 'rgb(244, 67, 54)' }} />{this.state.errors.form}</Subheader>}
                    <div className="input-group">
                        <TextField
                            type="text"
                            name="firstname"
                            floatingLabelText="First name"
                            value={user.firstname}
                            onChange={this.onChange}
                            errorText={this.state.errors.firstname}
                        />
                        <TextField
                            type="text"
                            name="lastname"
                            floatingLabelText="Last name"
                            value={user.lastname}
                            errorText={this.state.errors.lastname}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="input-group">
                        <SelectField
                            floatingLabelText="Country"
                            name="country"
                            errorText={this.state.errors.country}
                            value={user.country}
                            onChange={this.onSelect}>
                            {COUNTRY_CODES.map(function (countryCode, index) {
                                return <MenuItem key={index} value={countryCode.code.toLowerCase()} primaryText={countryCode.name} />;
                            })}
                        </SelectField>
                        <Flag width="30" height="25" nat={user.country} />
                    </div>
                    <div>
                        <FileInput name="profilepicture" onChange={this.onChange} hintText="Profile picture" />
                    </div>

                    <div>
                        <TextField
                            type="text"
                            name="introduction"
                            floatingLabelText="Short introduction"
                            value={user.introduction}
                            errorText={this.state.errors.introduction}
                            onChange={this.onChange}
                            multiLine={true}
                            rows={4}
                            rowsMax={10}
                            fullWidth={true}
                        />
                    </div>
                </CardText>
                <CardActions>
                    <FlatButton disabled={this.state.isLoading || !this.isDirty()} label="Save" primary={true} onClick={this.save} />
                    <FlatButton disabled={this.state.isLoading} label="Reset" secondary={true} onClick={this.reset} />
                </CardActions>
            </div>
        );
    }
}

export default connect(null, { addNotification, update })(UserProfileForm);