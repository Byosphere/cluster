import React, { Component } from 'react';
import { Card, CardHeader, CardTitle, CardText, CardActions } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

export default class ClusterMind extends Component {
    render() {

        let messages = [];
        for (var i = 0; i < 10; i++) {
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

        return (
            <div id="cluster-mind">
                <Card className="message-field">
                    <CardHeader
                        title="Without Avatar"
                        avatar="images/jsa-128.jpg"
                        style={{ paddingBottom: 0 }}
                    />
                    <CardText style={{ paddingTop: 0 }}>
                        <TextField
                            floatingLabelText="Message"
                            hintText="Tell what's on your mind today to your Cluster"
                            multiLine={true}
                            rowsMax={6}
                            fullWidth={true}
                        />
                    </CardText>
                    <CardActions>
                        <FlatButton label="Poster" primary={true} />
                        <FlatButton label="Save as draft" />
                    </CardActions>
                </Card>
                {messages}
                <Card>
                    <CardActions style={{textAlign:'center'}}>
                        <FlatButton label="Load previous messages" primary={true}/>
                    </CardActions>
                </Card>
            </div>
        );
    }
}