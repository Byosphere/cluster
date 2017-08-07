import React from 'react';
import { Card, CardHeader, CardTitle, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Parameters extends React.Component {

    reset(e) {
        e.preventDefault();
        console.log('reset');

    }

    save(e) {
        e.preventDefault();
        console.log('save');
    }

    render() {
        return (
            <div id="options">
                <div className="main-content">
                    <Card className="card">
                        <CardTitle title="Options" subtitle="Set here your application preferences" />
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
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

export default Parameters;