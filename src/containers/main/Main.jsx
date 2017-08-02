import React from 'react';
import Home from '../home/Home.jsx';
import {Route, Switch, Redirect} from 'react-router-dom';
import Profile from '../profile/Profile.jsx';
import NotFound from '../404/NotFound.jsx';

class Main extends React.Component {
  render () {
    return (
        <main>
            <Switch>
                <Route path='/home' component={Home} />
                <Route path='/profile' component={Profile} />
                <Route path='/404' component={NotFound} />
                <Redirect to="/404" />
            </Switch>
        </main>
    );
  }
}
 
export default Main;