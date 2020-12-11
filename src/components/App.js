import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

// import Dashboard from './Dashboard';
import Selection from './Selection/Selection';
// import Login from './Login'

import Dashboard2 from './Dashboards/Dashboard2';

import Login2 from './Logins/Login2';

import history from '../history';

class App extends React.Component {


    checkSignedIn = () => {

        const signedIn = localStorage.getItem('isSignedIn');
        console.log('isSignedIn? ',signedIn);

        if(signedIn) {
            return <Redirect to="/dashboard" />
        }
        else {
            return <Redirect to="/login" />
        }
    }


    renderComponent = () => {

        return (
            <div>
                <Router history={history}> 
                <div>
                    <Switch> 
                        <Route path="/login" exact component={Login2} />
                        <PrivateRoute path="/dashboard" exact component={Dashboard2} />
                        <PrivateRoute path="/selection/:selected" exact component={Selection} />
                        {/* <Redirect to="/login" /> */}
                        {this.checkSignedIn()}
                    </Switch>
                </div>
                </Router>
            </div>
            
        )
    }


    render() {
        return <div>{this.renderComponent()}</div>
    }

}

export default App;