import React from 'react';
import Home from '../home/Home.jsx';
import { Route, Switch, Redirect } from 'react-router-dom';
import Profile from '../profile/Profile.jsx';
import NotFound from '../404/NotFound.jsx';
import Parameters from '../parameters/Parameters.jsx';
import Signup from '../signup/Signup.jsx';
import Sidebar from '../../components/sidebar/Sidebar.jsx';
import requireAuth from '../../utils/requireAuth';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MailOutline from 'material-ui/svg-icons/communication/mail-outline';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            modalOpen: false,
            isLoading: false,
            messageData: '',
            errors: {}
        }
    }

    handleOpen(e) {
        if(e) e.preventDefault();
        this.setState({ modalOpen: true });
    }

    handleClose(e) {
        if(e) e.preventDefault();
        this.setState({ modalOpen: false });
    }

    postMessage(e) {
        e.preventDefault();
        console.log(this.state.messageData);
    }

    render() {

        let actions = [
            <FlatButton
                label="Cancel"
                secondary={true}
                onTouchTap={this.handleClose.bind(this)}
                disabled={this.state.isLoading}
            />,
            <FlatButton
                label="Post"
                primary={true}
                onTouchTap={this.handleClose.bind(this)}
                disabled={this.state.isLoading || this.state.messageData == ''}
            />,
        ];

        return (
            <main>
                <Sidebar></Sidebar>
                <div className="wrapper">
                    <Switch>
                        <Route path='/home' component={Home} />
                        <Route path='/profile/:id' component={Profile} />
                        <Route path='/profile' component={Profile} />
                        <Route path='/404' component={NotFound} />
                        <Route path='/parameters' component={requireAuth(Parameters)} />
                        <Route path='/signup' component={Signup} />
                        <Route exact path='/' component={Home} />
                        <Redirect to="/404" />
                    </Switch>
                </div>
                <FloatingActionButton onTouchTap={this.handleOpen.bind(this)} style={{ position: 'fixed', minWidth: 'auto', bottom: '5rem', right: '5rem' }}>
                    <MailOutline />
                </FloatingActionButton>
                <Dialog
                    title="Quick message to the Cluster"
                    actions={actions}
                    modal={false}
                    open={this.state.modalOpen}
                    onRequestClose={this.handleClose.bind(this)}
                >
                    <TextField
                        floatingLabelText="Message"
                        multiLine={true}
                        rows={3}
                        rowsMax={6}
                        fullWidth={true}
                        onChange={(e) => {this.setState({messageData: e.target.value})}}
                        errorText={this.state.errors.message}
                    />
                </Dialog>
            </main>
        );
    }
}

export default Main;