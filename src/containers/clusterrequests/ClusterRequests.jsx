import React, { Component } from 'react';
import { Card, CardHeader, CardTitle, CardText, CardActions } from 'material-ui/Card';


export default class ClusterRequests extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isRequestable: true,
            messages: props.requests,
            messagesHtml: []
        }
    }

    componentWillMount() {
        let messages = [];
        for (var i = 0; i < this.state.messages.length; i++) {
            messages.push(
                <Card key={i}>
                    <CardHeader
                        title="Without Avatar"
                        subtitle="Subtitle"
                        avatar="images/jsa-128.jpg"
                        actAsExpander={true}
                        showExpandableButton={true}
                    />
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                </Card>
            );
        }
        this.setState({ messagesHtml: messages });
    }

    render() {

        if (!this.state.isRequestable) {
            return (
                <div id="cluster-requests" className="centered-message">
                    <span>Your cluster is full and can no longer accept joining requests</span>
                </div>
            );
        } else if (!this.state.messages.length) {
            return (
                <div id="cluster-requests" className="centered-message">
                    <span>Your cluster have no new joining requests</span>
                </div>
            );
        } else {
            return (
                <div id="cluster-requests">
                    {this.state.messagesHtml}
                </div>
            );
        }
    }
}