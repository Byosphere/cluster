import React, { Component } from 'react';
import { Card, CardHeader, CardTitle, CardText, CardActions } from 'material-ui/Card';
import ClusterElem from '../../components/cluster/Cluster.jsx';
import ClusterMind from '../../components/clustermind/ClusterMind.jsx';
import { Tabs, Tab } from 'material-ui/Tabs';

class Cluster extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedTab: 'overview'
        }
    }

    componentWillMount() {
        if(this.props.match.params.tab) {
            this.setState({selectedTab: this.props.match.params.tab});
        }
    }

    handleChange(value) {
        this.props.history.push('/cluster/'+value);
        this.setState({
            selectedTab: value
        });
    }

    render() {
        return (
            <div id="cluster-page">
                <div className="main-content">
                    <Card className="card">
                        <Tabs value={this.state.selectedTab} onChange={this.handleChange.bind(this)}>
                            <Tab label="Overview" value="overview">
                                <CardTitle className="title" title="Cluster" subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti at quia labore impedit consequuntur pariatur, sequi consectetur nostrum totam architecto dolorem velit doloremque, qui delectus accusantium, tempore neque fugit iure." />
                                <ClusterElem />
                                <hr />
                                <CardText>
                                    Member since : 21/05/2018
                                    2324 messages posted
                                </CardText>
                            </Tab>
                            <Tab label="Global mind" value="messages">
                                <ClusterMind />
                            </Tab>
                            <Tab label="Cluster applications" value="app">
                            </Tab>
                            <Tab label="Cluster requests" value="requests">
                            </Tab>
                        </Tabs>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Cluster;