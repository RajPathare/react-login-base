import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import Sidebar from '../Dashboards/Sidebar';
import SelectedPage from './SelectedPage';

class Selection extends React.Component {


    renderUsername = () => {
        return (
            <div>
                <h1>Hello {this.props.username}!</h1>
            </div>
        )
    }

    renderSelectedItem = () => {

        return (
            <div>
                <h1>Selected item - {this.props.match.params.selected}!</h1>
            </div>
        )
    }

    render() {

        return (
            <div>
            <Sidebar />
            <SelectedPage selectedItem={this.props.match.params.selected} />
            {this.renderUsername()}
            {this.renderSelectedItem()}
            <Link to="/dashboard" className="ui button primary">Dashboard</Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.auth.username
    }
}

export default connect(mapStateToProps, {

})(Selection);