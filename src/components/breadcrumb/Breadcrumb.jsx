import React from 'react';


class Breadcrumb extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="breadcrumb">
                { this.props.path &&
                    this.props.path.split('/').map(function(text){
                        return <span key={text}>{text}</span>;
                    })
                }
                {!this.props.path && 
                    <span></span>
                }
            </div>
        );
    }
}

export default Breadcrumb;