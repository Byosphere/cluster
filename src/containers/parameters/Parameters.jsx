import React from 'react';
import { Card, CardHeader, CardTitle, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import { setSidebarPosition } from '../../actions/optionsActions';
import { connect } from 'react-redux';

class Parameters extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sidebarPos: false
        }
    }

    reset(e) {
        e.preventDefault();
        console.log('reset');

    }

    save(e) {
        e.preventDefault();
        console.log('save');
    }
    onToggle(e, isInputChecked) {
        this.setState({ sidebarPos: isInputChecked });
        this.props.setSidebarPosition(isInputChecked ? 'left' : 'right');
    }

    render() {
        return (
            <div id="options">
                <div className="main-content">
                    <Card className="card">
                        <CardTitle className="title" title="Options" subtitle="Set here your application preferences" />
                        <CardText>
                            <Toggle label="Put sidebar on the left" onToggle={this.onToggle.bind(this)} />
                        </CardText>
                        <CardActions>
                            <FlatButton label="Save" primary={true} onClick={this.save.bind(this)} />
                            <FlatButton label="Reset" secondary={true} onClick={this.reset.bind(this)} />
                        </CardActions>
                    </Card>
                </div>
            </div>
        );
    }
}

export default connect(null, { setSidebarPosition })(Parameters);