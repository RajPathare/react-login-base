import React from 'react';

import SideBar from './Sidebar';
import MainPanel from './MainPanel';

class Dashboard2 extends React.Component {
    render() {
        return (
            <div>
                <SideBar />
                <MainPanel />
            </div>
        )
    }
}



export default Dashboard2;