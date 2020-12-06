import React from 'react';
import { connect } from 'react-redux';

import history from '../history';


class Dashboard extends React.Component {


    logoutFunc = () => {
        console.log('logout invoked!');
        localStorage.removeItem('isSignedIn');
        history.push('/login');

    }

    renderComponent = () => {

        return (
            <div>
                <h1>Dashboard!</h1>
                <button className="ui button primary" onClick={()=> this.logoutFunc()}>Logout</button>
            </div>
        )
    }


    render(){
        return <div>{this.renderComponent()}</div>
    }

}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps,{

})(Dashboard);