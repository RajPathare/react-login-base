import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import history from '../history';

import SideScrollMenu from '../components/SideScrollMenu';

class Dashboard extends React.Component {

    logoutFunc = () => {
        console.log('logout invoked!');
        localStorage.clear();
        history.push('/login');
    }

    renderUsername = () => {
        
        if(!this.props.username) {
            return;
        }
        else return <p>Welcome {this.props.username}!</p>
    }

    renderComponent = () => {

        console.log('isSignedIn? ',this.props.isSignedIn)
        console.log('username ',this.props.username);

        return (
            <div className="ui container">
                <h1>Dashboard!</h1>
                {this.renderUsername()}
                <button className="ui button red" onClick={()=> this.logoutFunc()}>Logout</button>
                <SideScrollMenu />
            </div>
        )
    }


    render(){
        return <div>{this.renderComponent()}</div>
    }

}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn,
        username: state.auth.username
    }
}

export default connect(mapStateToProps,{

})(Dashboard);