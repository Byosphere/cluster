import React from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { DotLoader } from 'halogen';
import validator from 'validator';
import { login } from '../../actions/loginActions.jsx';
import { addNotification } from '../../actions/notificationAction.jsx';
import Dialog from 'material-ui/Dialog';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Toggle from 'material-ui/Toggle';
import ErrorIcon from 'material-ui/svg-icons/alert/error';
import { isEmpty } from 'lodash';

class HeadLogin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {},
            isLoading: false,
            modalOpen: false,
            storage: true
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.resetModal = this.resetModal.bind(this);
        this.onToggle = this.onToggle.bind(this);
        this.isValid = this.isValid.bind(this);
    }

    isValid() {
        var errors = {};
        if (!this.state.email) errors.email = "This field is required";
        if (!this.state.password) errors.password = "This field is required";
        if (this.state.email && !validator.isEmail(this.state.email)) errors.email = "This is not an e-mail address";
        if (this.state.password && !validator.isAscii(this.state.password)) errors.password = "Incorrect inputs";
        this.setState({ errors: errors });
        return isEmpty(errors);
    }

    onSubmit(e) {
        if (e) e.preventDefault();
        if (this.isValid()) {
            this.setState({ isLoading: true, errors: {} });
            this.props.login(this.state).then(
                (res) => {
                    this.handleClose(null, true);
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
    }

    resetModal() {
        this.setState({
            email: '',
            password: '',
            errors: {},
            storage: true
        });
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleOpen(e) {
        if (e) e.preventDefault();
        this.resetModal();
        this.setState({ modalOpen: true });
    }

    handleClose(e, success) {
        if (e) e.preventDefault();
        if (!success) {
            this.resetModal();
            this.setState({ modalOpen: false });
        }
    }

    onToggle(e, isInputChecked) {
        this.setState({ storage: isInputChecked });
    }

    render() {
        const actions = [
            <FlatButton
                label="Log in"
                primary={true}
                onClick={this.onSubmit}
                disabled={this.state.isLoading}
            />,
            <FlatButton
                label="Cancel"
                primary={false}
                onClick={this.handleClose}
                disabled={this.state.isLoading}
            />
        ];
        return (
            <div>
                <FlatButton label="Login" style={{ position: 'absolute', right: '1rem', top: '14px' }} primary={true} onClick={this.handleOpen} />
                <Dialog
                    bodyClassName="headLoginModal"
                    paperClassName="modal"
                    title="Log in to your Cluster"
                    actions={actions}
                    modal={false}
                    open={this.state.modalOpen}
                    onRequestClose={this.handleClose}>
                    {this.state.errors.form && <Subheader className="error" style={{ margin: 0 }}><ErrorIcon style={{ color: 'rgb(244, 67, 54)' }} />{this.state.errors.form}</Subheader>}
                    <TextField
                        floatingLabelText="E-mail"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        type="text"
                        errorText={this.state.errors.email}
                        onKeyPress={(e) => { if (e.key == 'Enter') this.onSubmit() }}
                    />
                    <br />
                    <TextField
                        floatingLabelText="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        type="password"
                        errorText={this.state.errors.password}
                        onKeyPress={(e) => { if (e.key == 'Enter') this.onSubmit() }}
                    />
                    <Toggle onToggle={this.onToggle} label="Stay connected" style={{ marginTop: '1rem' }} defaultToggled={this.state.storage} labelPosition="right" />
                </Dialog>
            </div>
        );
    }
}

export default connect(null, { login, addNotification })(HeadLogin);