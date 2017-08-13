import React from 'react';
import Footer from '../footer/Footer.jsx';

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    onChange(e) {
        e.preventDefault();
        console.log(e.target.value);
    }


    render() {
        return (
            <div id="home">
                <div className="main-content">
                    <h2>Find your Cluster</h2>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus sit provident, ex aspernatur obcaecati, asperiores fugit commodi voluptates maxime saepe necessitatibus magni repudiandae blanditiis error corporis earum consequatur incidunt illum.</p>
                </div>
            </div>
        );
    }
}

export default Home;