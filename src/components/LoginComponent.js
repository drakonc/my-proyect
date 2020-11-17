import React from 'react';
import { NavLink } from "react-router-dom";

class LoginComponent extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div>
                Desde Login
                <NavLink exact to="/"> <i className="fas fa-sign-out-alt"></i></NavLink >
            </div>
        )
    }
}

export default LoginComponent;
