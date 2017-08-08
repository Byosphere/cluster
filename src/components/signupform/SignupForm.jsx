import React from 'react';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/userRequests.jsx';
import { browserHistory } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';

class SignupForm extends React.Component {

    constructor() {
        super();
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            country: '',
            age: 0,
            errors: {},
            isLoading: false
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        this.setState({errors: {}, isLoading: true});
        this.props.userSignupRequest(this.state).then(
            () => {}
        );
    }

    render() {
        return (
            <form className="signupform" onSubmit={this.onSubmit}>
                <div>
                    <TextField
                        floatingLabelText="Username"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChange}
                        type="text"
                    />
                </div>
                <div>
                    <TextField 
                        type="text"
                        floatingLabelText="E-mail"
                        name="email" 
                        value={this.state.email}
                        onChange={this.onChange}
                    />
                </div>
                <div>
                    <TextField 
                        type="password" 
                        name="password" 
                        floatingLabelText="Password"
                        value={this.state.password}
                        onChange={this.onChange}
                    />
                    <TextField 
                        type="password" 
                        name="passwordConfirmation"
                        floatingLabelText="Confirm password"
                        value={this.state.passwordConfirmation}
                        onChange={this.onChange}
                    />
                </div>
                <FlatButton label="Register" primary={true} />
            </form>
        );
    }
}

export default connect(null, { userSignupRequest }) (SignupForm);