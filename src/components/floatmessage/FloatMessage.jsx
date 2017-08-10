import React, { Component } from 'react';
import { connect } from 'react-redux'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MailOutline from 'material-ui/svg-icons/communication/mail-outline';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

class FloatMessage extends Component {

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
        if (e) e.preventDefault();
        this.setState({ modalOpen: true });
    }

    handleClose(e) {
        if (e) e.preventDefault();
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
        if (this.props.auth.isAuthenticated) {
            return (
                <div>
                    <FloatingActionButton onTouchTap={this.handleOpen.bind(this)} style={{ position: 'fixed', minWidth: 'auto', bottom: 'calc(5% + 30px)', right: '5%' }}>
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
                            onChange={(e) => { this.setState({ messageData: e.target.value }) }}
                            errorText={this.state.errors.message}
                        />
                    </Dialog>
                </div>
            );
        } else {
            return <div></div>;
        }
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(FloatMessage);