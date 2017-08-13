import React from 'react';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/userRequests.jsx';
import { browserHistory } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { Step, Stepper, StepLabel, StepContent } from 'material-ui/Stepper';
import validator from 'validator';
import { isEmpty } from 'lodash';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {COUNTRY_CODES} from '../../Constants';
import Flag from '../../components/flag/Flag.jsx';
import DatePicker from 'material-ui/DatePicker';
import { RingLoader } from 'halogen';
import Subheader from 'material-ui/Subheader';
import ErrorIcon from 'material-ui/svg-icons/alert/error';

class SignupForm extends React.Component {

    constructor() {
        super();

        const maxDate = new Date();
        maxDate.setFullYear(maxDate.getFullYear() - 18);

        this.state = {
            username: '',
            email: '',
            gender: '',
            firstname: '',
            lastname: '',
            profilepicture: '',
            birthdate: undefined,
            password: '',
            passwordConfirmation: '',
            country: '',
            parameters: {},
            errors: {},
            isLoading: false,
            stepIndex: 0,
            maxDate: maxDate
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.renderStepActions = this.renderStepActions.bind(this);
        this.verifyFields = this.verifyFields.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
    }

    verifyFields(step) {
        var errors = {};
        switch (step) {
            case 0:
                if(!this.state.username) errors.username = "This field is required";
                if(!this.state.email) errors.email = "This field is required";
                if(!this.state.password) errors.password = "This field is required";
                if(!this.state.passwordConfirmation) errors.passwordConfirmation = "This field is required";
                if (this.state.username && !validator.isAlphanumeric(this.state.username)) errors.username = "You can only use alphanumeric symbols for your username";
                if (this.state.email && !validator.isEmail(this.state.email)) errors.email = "This is not an e-mail address";
                if (this.state.password && !validator.isAscii(this.state.password)) errors.password = "Incorrect inputs";
                if (this.state.passwordConfirmation && !validator.equals(this.state.passwordConfirmation, this.state.password)) errors.passwordConfirmation = errors.password = "The passord fields are different";
                if (this.state.password && !validator.isLength(this.state.password, {min:8, max: undefined})) errors.passwordConfirmation = errors.password = "The passord must be at least 8 characters";
                break;
            case 1:
                if(!this.state.firstname) errors.firstname = "This field is required";
                if(!this.state.lastname) errors.lastname = "This field is required";
                if(!this.state.gender) errors.gender = "This field is required";
                if(!this.state.country) errors.country = "This field is required";
                if(!this.state.birthdate) errors.birthdate = "This field is required";
                if(this.state.firstname && !validator.isAlpha(this.state.firstname)) errors.firstname = "This field can contain only letters";
                if(this.state.lastname && !validator.isAlpha(this.state.lastname)) errors.lastname = "This field can contain only letters";
                break;
            case 2:
                
                break;
        }
        this.setState({errors: errors});
        return isEmpty(errors);
    }

    handleNext() {
        const { stepIndex } = this.state;

        if (this.verifyFields(stepIndex)) {

            this.setState({stepIndex: stepIndex + 1});

            if(stepIndex == 2) {
                this.onSubmit();
            }
        }
    }

    handlePrev() {
        const { stepIndex } = this.state;
        if (stepIndex > 0) {
            this.setState({ stepIndex: stepIndex - 1 });
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        if(e) e.preventDefault();
        this.setState({ errors: {}, isLoading: true });
        this.props.userSignupRequest(this.state).then(
            (res) => {

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

    renderStepActions(step) {
        const { stepIndex } = this.state;

        return (
            <div style={{ margin: '12px 0' }}>
                <RaisedButton
                    label={stepIndex === 2 ? 'Register' : 'Next'}
                    disableTouchRipple={true}
                    disableFocusRipple={true}
                    primary={true}
                    onTouchTap={this.handleNext.bind(this)}
                    style={{ marginRight: 12 }}
                />
                {step > 0 && (
                    <FlatButton
                        label="Back"
                        disabled={stepIndex === 0}
                        disableTouchRipple={true}
                        disableFocusRipple={true}
                        onTouchTap={this.handlePrev.bind(this)}
                    />
                )}
            </div>
        );
    }

    render() {

        const { stepIndex } = this.state;

        return (
            <form id="signupform" onSubmit={this.onSubmit}>
                {this.state.errors.form && <Subheader className="error" style={{ margin: 0 }}><ErrorIcon style={{ color: 'rgb(244, 67, 54)' }} />{this.state.errors.form}</Subheader>}
                <Stepper activeStep={stepIndex} orientation="vertical">
                    <Step>
                        <StepLabel>Enter your basic credentials</StepLabel>
                        <StepContent>
                            <p>
                                For each ad campaign that you create, you can control how much
                                you're willing to spend on clicks and conversions, which networks
                                and geographical locations you want your ads to show on, and more.
                            </p>
                            <div>
                                <TextField
                                    floatingLabelText="Username"
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.onChange}
                                    errorText={this.state.errors.username}
                                    type="text"
                                />
                            </div>
                            <div>
                                <TextField
                                    type="text"
                                    floatingLabelText="E-mail"
                                    name="email"
                                    errorText={this.state.errors.email}
                                    value={this.state.email}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="input-group">
                                <TextField
                                    type="password"
                                    name="password"
                                    floatingLabelText="Password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                    errorText={this.state.errors.password}
                                />
                                <TextField
                                    type="password"
                                    name="passwordConfirmation"
                                    floatingLabelText="Confirm password"
                                    value={this.state.passwordConfirmation}
                                    errorText={this.state.errors.passwordConfirmation}
                                    onChange={this.onChange}
                                />
                            </div>
                            {this.renderStepActions(0)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Tell us more about you</StepLabel>
                        <StepContent>
                            <p>
                                For each ad campaign that you create, you can control how much
                                you're willing to spend on clicks and conversions, which networks
                                and geographical locations you want your ads to show on, and more.
                            </p>
                            <div className="input-group">
                                <TextField
                                    type="text"
                                    name="firstname"
                                    floatingLabelText="First name"
                                    value={this.state.firstname}
                                    onChange={this.onChange}
                                    errorText={this.state.errors.firstname}
                                />
                                <TextField
                                    type="text"
                                    name="lastname"
                                    floatingLabelText="Last name"
                                    value={this.state.lastname}
                                    errorText={this.state.errors.lastname}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div>
                                <SelectField
                                    floatingLabelText="Gender"
                                    name="gender"
                                    errorText={this.state.errors.gender}
                                    value={this.state.gender}
                                    onChange={(e, i, v) => {this.setState({gender: v})}}>
                                    <MenuItem value="male" primaryText="Male" />
                                    <MenuItem value="female" primaryText="Female" />
                                    <MenuItem value="other" primaryText="Other" />
                                </SelectField>
                            </div>
                            <div className="input-group">
                                <SelectField
                                    floatingLabelText="Country"
                                    name="country"
                                    errorText={this.state.errors.country}
                                    value={this.state.country}
                                    onChange={(e, i, v) => {this.setState({country: v})}}>
                                    {COUNTRY_CODES.map(function(countryCode, index) {
                                        return <MenuItem key={ index } value={countryCode.code.toLowerCase()} primaryText={countryCode.name} />;
                                    })}
                                </SelectField>
                                <Flag width="30" height="25" nat={this.state.country} />
                            </div>
                            <div>
                                <DatePicker 
                                    floatingLabelText="Date of birth"
                                    name="birthdate"
                                    value={this.state.birthdate}
                                    errorText={this.state.errors.birthdate}
                                    onChange={(e, date) => {this.setState({birthdate:date})}}
                                    openToYearSelection={true}
                                    maxDate={this.state.maxDate}
                                />
                            </div>
                            {this.renderStepActions(1)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Choose your prefered settings</StepLabel>
                        <StepContent>
                            <p>
                                For each ad campaign that you create, you can control how much
                                you're willing to spend on clicks and conversions, which networks
                                and geographical locations you want your ads to show on, and more.
                            </p>

                            {this.renderStepActions(2)}
                        </StepContent>
                    </Step>
                </Stepper>
                {this.state.isLoading && <RingLoader color="#18ffff" size="40px" className="loader" />}
            </form>
        );
    }
}

export default connect(null, { userSignupRequest })(SignupForm);