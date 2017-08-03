import React from 'react';
// import Cluster from '../../components/cluster/Cluster.jsx';
import Footer from '../footer/Footer.jsx';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb.jsx';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div id="home">
        <div className="main-content">
          <h2>Find your Cluster</h2>
          <hr/>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus sit provident, ex aspernatur obcaecati, asperiores fugit commodi voluptates maxime saepe necessitatibus magni repudiandae blanditiis error corporis earum consequatur incidunt illum.</p>
        </div>
        <Footer />
      </div>
    );
  }
}
 
export default Home;