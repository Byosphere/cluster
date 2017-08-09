import React from 'react';
import { connect } from 'react-redux';
import { setSidebarPosition } from '../../actions/optionsActions';
import { bindActionCreators } from 'redux';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { INSIDE_CARD_STYLE } from '../../Constants';

class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            position: 'right'
        }
    }

    componentWillReceiveProps(newProps) {
        console.log(newProps);
        this.setState({ position: newProps.option.position });
    }

    render() {

        return (
            <Card id="sidebar" style={{ flex: 1, margin: "1rem", order: this.state.position == 'right' ? '2' : '1', minWidth: "300px", zIndex: "auto" }}>
                <CardTitle titleStyle={{ fontFamily: "'PT Sans Narrow',sans-serif" }} titleColor="#2f4154" title="Last messages" subtitle="from your Cluster" />
                <div className="messages">
                    <Card className="message" style={INSIDE_CARD_STYLE}>
                        <CardHeader
                            title="URL Avatar"
                            subtitle="Subtitle"
                            avatar="images/jsa-128.jpg"
                            actAsExpander={true}
                            showExpandableButton={true}
                        />
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. [...]
                        </CardText>
                        <CardText expandable={true}>
                            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                        </CardText>
                        <CardActions>
                            <FlatButton label="Send a private message" primary={true} />
                            <FlatButton label="Dismiss" secondary={true} />
                        </CardActions>
                    </Card>
                </div>
            </Card>
        );
    }
}

function mapStateToProps(state) {
    return {
        option: state.option
    }
}

export default connect(mapStateToProps)(Sidebar);