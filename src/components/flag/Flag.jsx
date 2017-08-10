import React from 'react';
import ReactSVG from 'react-svg';

class Flag extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            width: this.props.width || '20',
            height: this.props.height || '15'
        }
        this.flag = "../../../public/images/flags/" + this.props.nat.toLowerCase() + ".svg";
    }

    render() {
        return (
            <ReactSVG
                path={this.flag}
                className="flag"
                style={{ width: this.state.width+'px', height: this.state.height+'px' }}
            />
        );
    }
}

export default Flag;