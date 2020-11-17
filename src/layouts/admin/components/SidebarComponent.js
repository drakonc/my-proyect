import React from 'react';
import SeccionTopComponent from './SeccionTopComponent'
import MainComponent from './MainComponent'

class SidebarComponent extends React.Component {
    render() {
        return (
            <div className="sidebar shadow">
                <SeccionTopComponent />
                <MainComponent />
            </div>
        )
    }
}

export default SidebarComponent;