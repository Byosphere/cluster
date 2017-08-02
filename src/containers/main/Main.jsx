import React from 'react';
import Home from '../home/Home.jsx';
import {Route, Switch, Redirect} from 'react-router-dom';
import Profile from '../profile/Profile.jsx';
import NotFound from '../404/NotFound.jsx';
import Parameters from '../parameters/Parameters.jsx';
import Sidebar from '../../components/sidebar/Sidebar.jsx';

class Main extends React.Component {
  render () {
    return (
        <main>
            <Switch>
                <Route path='/home' component={Home} />
                <Route path='/profile' component={Profile} />
                <Route path='/404' component={NotFound} />
                <Route path='/parameters' component={Parameters} />
                <Route exact path='/' component={Home} />
                <Redirect to="/404" />
            </Switch>
            <Sidebar></Sidebar>
        </main>
    );
  }
}
 
export default Main;