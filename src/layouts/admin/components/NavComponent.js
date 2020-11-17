import React from 'react';
import { Link } from "react-router-dom";

class NavComponent extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-color navbar-expand-lg shadow">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="navbar-item">
                            <Link className="nav-link" to="/">
                                <i className="fas fa-home"></i> Dashboard
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavComponent;
