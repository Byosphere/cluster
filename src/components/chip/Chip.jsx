import React, { Component } from 'react';
import MaterialChip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import Level1 from 'material-ui/svg-icons/image/brightness-3';
import Level2 from 'material-ui/svg-icons/image/brightness-2';
import Level3 from 'material-ui/svg-icons/image/brightness-4';
import Level4 from 'material-ui/svg-icons/image/brightness-5';
import Level5 from 'material-ui/svg-icons/image/brightness-7';

export default class Chip extends Component {

    constructor(props) {
        super(props);
        this.state = {
            style: {},
            textColor: '',
            avatar: null,
            avatarBack: '',
            type: props.type || 'normal'
        }
    }

    componentWillMount() {
        switch (this.state.type) {
            case 'success':
                this.setState({ style: { backgroundColor: "#81C784" }, textColor: 'white' });
                break;

            case 'warning':
                this.setState({ style: { backgroundColor: "#FFC107" }, textColor: 'black' });
                break;

            case 'error':
                this.setState({ style: { backgroundColor: "#F44336" }, textColor: 'white' });
                break;

            case 'cluster-level-1':
                this.setState({
                    style: { backgroundColor: "#039BE5" },
                    textColor: 'white',
                    avatar: (<Level1 />),
                    avatarBack: '#0277BD',
                    text: 'Curiosity'
                });
                break;

            case 'cluster-level-2':
                this.setState({
                    style: { backgroundColor: "#009688" },
                    textColor: 'white',
                    avatar: (<Level2 />),
                    avatarBack: '#00796B',
                    text: 'Gathering'
                });
                break;

            case 'cluster-level-3':
                this.setState({
                    style: { backgroundColor: "#7E57C2" },
                    textColor: 'white',
                    avatar: (<Level3 />),
                    avatarBack: '#5E35B1',
                    text: 'Sharing'
                });
                break;

            case 'cluster-level-4':
                this.setState({
                    style: { backgroundColor: "#FFD54F" },
                    textColor: 'white',
                    avatar: (<Level4 />),
                    avatarBack: '#FFC107',
                    text: 'Belief'
                });
                break;

            case 'cluster-level-5':
                this.setState({
                    style: { backgroundColor: "#EF6C00" },
                    textColor: 'white',
                    avatar: (<Level5 />),
                    avatarBack: '#E65100',
                    text: 'Sensate'
                });
                break;
            case 'type-1':
                this.setState({
                    style: { backgroundColor: "#B71C1C" },
                    textColor: 'white',
                    text: 'Strict'
                });
                break;
            case 'type-2':
                this.setState({
                    style: { backgroundColor: "#880E4F" },
                    textColor: 'white',
                    text: 'Semi-strict'
                });
                break;
            case 'type-2':
                this.setState({
                    text: 'Open'
                });
                break;
        }

    }

    render() {
        
        return (
            <MaterialChip style={this.state.style} labelColor={this.state.textColor}>
                {this.state.avatar && <Avatar backgroundColor={this.state.avatarBack} color={this.state.textColor} icon={this.state.avatar} />}
                {this.props.children ||  this.state.text}
            </MaterialChip>
        );
    }
}