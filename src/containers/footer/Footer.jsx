import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render () {
    return (
      <footer>
        <p>
          <Link to='/about'>About</Link> |&nbsp; 
          <Link to='/faq'>FAQ</Link> |&nbsp; 
          <Link to='/support'>Support</Link> |&nbsp;  
          <Link to='/privacy'>Privacy Policy</Link> |&nbsp;  
          <Link to='/termsofuse'>Terms of Use</Link> |&nbsp;
          Copyright 2017 - Cluster 8</p>
      </footer>
    );
  }
}
 
export default Footer;