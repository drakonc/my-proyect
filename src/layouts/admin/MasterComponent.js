import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import '../../shared/AdminMaster.css'

import { SidebarComponent, NavComponent, PageComponent } from './components/'

class MasterComponent extends React.Component {
    render() {
        return (
            <Router>
                <div className="wrapper">
                    <div className="col1">
                        <SidebarComponent />
                    </div>
                    <div className="col2">
                        <NavComponent />
                        <div className="page">
                            <PageComponent />
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

export default MasterComponent;
