import React from 'react';
import { Link } from 'react-router-dom';
import './paper.css';

class Sidebar extends React.Component {
    render() {
        return (
            <div>
                <div className="sidebar" data-color="white" data-active-color="danger">
                <div className="logo">
                    <Link to="/dashboard" className="simple-text logo-normal">
                    SideScroll App
                    </Link>
                </div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                    <li className="active ">
                        <Link to="/dashboard">
                        <p>Dashboard</p>
                        </Link>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
        )
    }
}



export default Sidebar;