import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

class Profile extends React.Component {


    renderUsername = () => {
        return (
            <div>
                <h1>Hello {this.props.username}!</h1>
                <Link to="/dashboard" className="ui button primary">Dashboard</Link>
            </div>
        )
    }

    render() {
        return <div>{this.renderUsername()}</div>
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.auth.username
    }
}

export default connect(mapStateToProps, {

})(Profile);