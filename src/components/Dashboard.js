import React from 'react';
import { connect } from 'react-redux';

class Dashboard extends React.Component {


    renderComponent = () => {

        return (
            <div>Dashboard!</div>
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