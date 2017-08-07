import React from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardTitle, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { getUserById } from '../../actions/userRequests.jsx';

class Profile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            paramsId: '',
            user: {}
        }

    }

    componentWillMount() {

        if (this.props.match.params.id) {

            this.props.getUserById(this.props.match.params.id).then((user) => {
                this.setState({ paramsId: this.props.match.params.id, user: user });

            });

        } else {
            this.setState({ paramId: this.props.auth.user.id, user: this.props.auth.user });
        }

    }

    componentWillReceiveProps(newProps) {
        console.log('test');
        if (newProps.match.params.id && newProps.match.params.id != this.state.paramsId) {
            this.props.getUserById(this.props.match.params.id).then((user) => {
                this.setState({ paramsId: this.props.match.params.id, user: user });

            });
        } else {
            this.setState({ paramId: this.props.auth.user.id, user: this.props.auth.user });
        }
    }

    save(e) {
        e.preventDefault();
    }

    reset(e) {
        e.preventDefault();
    }

    render() {

        const user = this.state.user;

        return (
            <div id="profile">
                <div className="main-content">
                    <Card className="card">
                        <CardTitle className="title" title={(user.name ? user.name.first + " " + user.name.last : '') + "'s Profile"} subtitle="You can modify here your public profile. Having a good profile help to find a Cluster." />
                        <CardText>
                            <div>
                                <img src={user.picture ? user.picture.large : ''} alt={(user.name ? user.name.first + " " + user.name.last : '') + "'s Profile"} />
                            </div>
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

function mapStateToProps(state, ownProps) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { getUserById })(Profile);