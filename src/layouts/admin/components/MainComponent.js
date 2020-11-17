import React from 'react';
import { NavLink } from "react-router-dom";

import links from '../../../routes/sidebar.routes';

class MainComponent extends React.Component {
    render() {
        const Renderlinks = links.map((item) => {
            return (<li key={item.to}><NavLink exact={item.exact} to={item.to}><i className={item.iclas}></i> {item.name}</NavLink></li>)
        })
        return (
            <div className="main">
                <ul>
                    {Renderlinks}
                </ul>
            </div>
        )
    }
}

export default MainComponent;
