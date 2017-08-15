import React from 'react';
import ReactSVG from 'react-svg';

class Flag extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            width: this.props.width || '20',
            height: this.props.height || '20',
            flagUrl: '',
            size: props.size || ''
        }

    }

    componentWillMount() {
        this.setState({ flagUrl: this.props.nat ? "../../../public/images/flags/" + this.props.nat.toLowerCase() + ".svg" : '' });
    }

    componentWillReceiveProps(newProps) {
        this.setState({ flagUrl: newProps.nat ? "../../../public/images/flags/" + newProps.nat.toLowerCase() + ".svg" : '' });
    }

    render() {

        if (!this.state.flagUrl) return (<div></div>);

        return (
            <ReactSVG
                path={this.state.flagUrl}
                className="flag"
                style={this.state.size ? {width:this.state.size+ 'px', height: this.state.size + 'px'} : { width: this.state.width + 'px', height: this.state.height + 'px' }}
            />
        );
    }
}

export default Flag;