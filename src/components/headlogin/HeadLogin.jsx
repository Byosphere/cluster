import React from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { DotLoader } from 'halogen';
import validateInput from '../../validators/login';
import { login } from '../../actions/loginActions.jsx';

class HeadLogin extends React.Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {},
            isLoading: false
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    isValid() {
        const {errors, isValid} = validateInput(this.state);
        if(!isValid) {
            this.setState({errors});
        }
        return isValid;
    }

    onSubmit(e) {
        e.preventDefault();
        if(this.isValid()) {
            this.setState({isLoading: true, errors: {}});
            this.props.login(this.state).then(
                // (res) => '',
                (err) => this.setState({errors:err.data.errors, isLoading:false})
            );
        }
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value });
    }

    render() {
        return (
            <div id="headLogin">
                <form onSubmit={this.onSubmit}>
                    <TextField
                        hintText="E-mail"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        type="text"
                        hintStyle={{color: 'rgba(255,255,255,0.5)'}}
                        style={{width:'190px', marginRight:'1rem'}}
                        inputStyle={{color:'#FFF'}}
                        errorText={this.state.errors.email}
                        errorStyle={{bottom:'6px'}}
                    />
                    <TextField
                        hintText="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        type="password"
                        hintStyle={{color: 'rgba(255,255,255,0.5)'}}
                        style={{width:'190px', marginRight:'1rem'}}
                        inputStyle={{color:'#FFF'}}
                        errorText={this.state.errors.password}
                        errorStyle={{bottom:'6px'}}
                    />
                    {!this.state.isLoading && <FlatButton type="submit" label="Log in" primary={true} />}
                    {this.state.isLoading && <DotLoader className="loader" color="#18FFFF" size="40px" />} 
                </form>
            </div>
        );
    }
}

export default connect(null, { login }) (HeadLogin);