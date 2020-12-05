import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import Dashboard from './Dashboard';
import Login from './Login'

import { connect } from 'react-redux';

import history from '../history';

class App extends React.Component {


    renderComponent = () => {

        return (
            <div className="ui container">
                <Router history={history}> 
                <div>
                    <Switch> 
                        <Route path="/login" exact component={Login} />
                        <PrivateRoute path="/dashboard" exact component={Dashboard} isSignedIn={this.props.isSignedIn} />
                        <Redirect to="/login" />
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

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}


export default connect(mapStateToProps,{

})(App);