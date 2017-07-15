import React from 'react';
import Home from '../home/Home.jsx';
import {Route, Switch} from 'react-router-dom';
import Profile from '../profile/Profile.jsx';

class Main extends React.Component {
  render () {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/profile' component={Profile} />
            </Switch>
        </main>
    );
  }
}
 
export default Main;