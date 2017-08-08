import React from 'react';
import { connect } from 'react-redux';
import { setSidebarPosition } from '../../actions/optionsActions';
import { bindActionCreators } from 'redux';

class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            position: 'left'
        }
    }

    componentWillReceiveProps(newProps) {
        console.log(newProps);
        this.setState({position: newProps.option.position});
    }

    render() {
        return (
            <aside id="sidebar" className={this.state.position}></aside>
        );
    }
}

function mapStateToProps(state) {
    return {
        option:state.option
    }
}

export default connect(mapStateToProps)(Sidebar);