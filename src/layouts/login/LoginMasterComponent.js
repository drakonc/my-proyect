import React from 'react';
import { Route, Switch } from "react-router-dom";

import { LoginComponent } from '../../components/'


class LoginMasterComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>Header Login</h1>
                <Switch>
                    <Route exact path="/login" component={LoginComponent}></Route>
                </Switch>
                <h1> Footer Login</h1>
            </div>
        )
    }
}

export default LoginMasterComponent;