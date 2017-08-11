import React, { Component } from 'react';
import { Card, CardHeader, CardTitle, CardText, CardActions } from 'material-ui/Card';
import ClusterElem from '../../components/cluster/Cluster.jsx';
import ClusterMind from '../../components/clustermind/ClusterMind.jsx';
import ClusterRequests from '../clusterrequests/ClusterRequests.jsx';
import { Tabs, Tab } from 'material-ui/Tabs';
import Chip from '../../components/chip/Chip.jsx';
import { Redirect } from 'react-router-dom';

class Cluster extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: props.match.params.tab || 'overview',
            cluster: {},
            requests: [],
            decisions: []
        }
    }

    handleChange(value) {
        this.props.history.push('/cluster/'+value);
        this.setState({
            selectedTab: value
        });
    }

    render() {

        if(!this.state.cluster) return (<Redirect to="/404" />);

        return (
            <div id="cluster-page">
                <div className="main-content">
                    <Card className="card">
                        <Tabs value={this.state.selectedTab} onChange={this.handleChange.bind(this)}>
                            <Tab label="Overview" value="overview">
                                <CardTitle className="title" title="Cluster" subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti at quia labore impedit consequuntur pariatur, sequi consectetur nostrum totam architecto dolorem velit doloremque, qui delectus accusantium, tempore neque fugit iure." />
                                <div className="chips">                                
                                    <Chip type="warning"> Full </Chip>
                                    <Chip type="cluster-level-1" />
                                </div>
                                <ClusterElem />
                                <hr />
                                <CardText>
                                    Member since : 21/05/2018
                                    2324 messages posted
                                </CardText>
                            </Tab>
                            <Tab label="Shared mind (2)" value="messages">
                                <ClusterMind />
                            </Tab>
                            <Tab label="Decisions" value="app">
                            </Tab>
                            <Tab 
                                label={this.state.requests.length ? "Requests ("+this.state.requests.length+")" : "Requests"}
                                disabled={!this.state.requests.length} 
                                buttonStyle={{color:this.state.requests.length ? '' : 'rgba(255,255,255,0.4)'}} 
                                value="requests"
                            >
                                <ClusterRequests requests={this.state.requests} />
                            </Tab>
                        </Tabs>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Cluster;