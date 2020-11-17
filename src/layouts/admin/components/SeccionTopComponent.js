import React from 'react';
import { NavLink } from "react-router-dom";
import logo from '../../../static/img/logo.png';

class SeccionTopComponent extends React.Component {
    render() {
        return (
            <div className="section-top">

                <div className="logo">
                    <img src={logo} className="img-fluid" alt="Logo" />
                </div>
                <div className="user">
                    <span className="subtitle">Hola:</span>
                    <div className="name">
                        Jose Castro
                            <NavLink to="/login" data-toggle="tooltip" data-placement="top" title="Salir"> <i className="fas fa-sign-out-alt"></i></NavLink>
                    </div>
                    <div className="email"> jcastro@gmail.com </div>
                </div>

            </div>
        )
    }
}

export default SeccionTopComponent;
