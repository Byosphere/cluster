import React from 'react';
import Home from '../home/Home.jsx';
import { Route, Switch, Redirect } from 'react-router-dom';
import Profile from '../profile/Profile.jsx';
import Cluster from '../cluster/Cluster.jsx';
import NotFound from '../404/NotFound.jsx';
import Parameters from '../parameters/Parameters.jsx';
import Signup from '../signup/Signup.jsx';
import Sidebar from '../../components/sidebar/Sidebar.jsx';
import requireAuth from '../../utils/requireAuth';
import FloatMessage from '../../components/floatmessage/FloatMessage.jsx';

class Main extends React.Component {

    render() {

        return (
            <main>
                <Sidebar></Sidebar>
                <div className="wrapper">
                    <Switch>
                        <Route path='/home' component={Home} />
                        <Route path='/profile/:id' component={Profile} />
                        <Route path='/profile' component={Profile} />
                        <Route path='/cluster' component={Cluster} />
                        <Route path='/404' component={NotFound} />
                        <Route path='/parameters' component={requireAuth(Parameters)} />
                        <Route path='/signup' component={Signup} />
                        <Route exact path='/' component={Home} />
                        <Redirect to="/404" />
                    </Switch>
                </div>
                <FloatMessage />
            </main>
        );
    }
}

export default Main;