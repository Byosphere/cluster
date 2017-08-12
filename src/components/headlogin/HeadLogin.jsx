import React from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { DotLoader } from 'halogen';
import validateInput from '../../validators/login';
import { login } from '../../actions/loginActions.jsx';
import { addNotification } from '../../actions/notificationAction.jsx';
import Dialog from 'material-ui/Dialog';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Toggle from 'material-ui/Toggle';
import ErrorIcon from 'material-ui/svg-icons/alert/error';

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
    }

    isValid() {
        const { errors, isValid } = validateInput(this.state);
        if (!isValid) {
            this.setState({ errors });
        }
        return isValid;
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.isValid()) {
            this.setState({ isLoading: true, errors: {} });
            this.props.login(this.state).then(
                (res) => {
                    this.setState({ isLoading: false });
                    this.handleClose();
                },
                (err) => {
                    console.log(err);
                    this.setState({ errors: { form: err }, isLoading: false });
                    if(this.state.errors.form) {
                        this.props.addNotification(this.state.errors.form,"error");
                    }
                }
            ).catch(
                (err) => {
                    this.setState({ errors: { form: err }, isLoading: false });
                    if(this.state.errors.form) {
                        this.props.addNotification(this.state.errors.form,"error");
                    }
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
        if(e) e.preventDefault();
        this.resetModal();
        this.setState({ modalOpen: true });
    }

    handleClose(e) {
        if(e) e.preventDefault();
        this.resetModal();
        this.setState({ modalOpen: false });
    }

    onToggle(e, isInputChecked) {
        this.setState({storage: isInputChecked});
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
                    <TextField
                        floatingLabelText="E-mail"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        type="text"
                        errorText={this.state.errors.email}
                    />
                    <br />
                    <TextField
                        floatingLabelText="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        type="password"
                        errorText={this.state.errors.password}
                    />
                    <Toggle onToggle={this.onToggle} label="Stay connected" style={{marginTop:'1rem'}} defaultToggled={this.state.storage} labelPosition="right" />
                    {this.state.errors.form && <Subheader className="error" style={{ color: 'rgb(244, 67, 54)', textAlign: 'right' }}><ErrorIcon style={{color: 'rgb(244, 67, 54)'}} />{this.state.errors.form}</Subheader>} 
                </Dialog>
            </div>
        );
    }
}

export default connect(null, { login, addNotification })(HeadLogin);