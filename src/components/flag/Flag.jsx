import React from 'react';
import ReactSVG from 'react-svg';

class Flag extends React.Component {

    constructor(props) {
        super(props);
        this.flag = "../../../public/images/flags/"+this.props.nat+".svg";
    }

    render() {
        return (
            <ReactSVG
                path={this.flag}
                className="flag"
                style={{ width: 20, height: 15 }}
            />
        );
    }
}

export default Flag;