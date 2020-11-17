import React from 'react';
import { Route, Switch } from "react-router-dom";
import rutas from '../../../routes/admin.routes'

class PageComponent extends React.Component {
    render() {
        const routs = rutas.map((item) => {
            return (<Route exact={item.exact} path={item.path} component={item.component} key={item.path}></Route>)
        })
        return (
            <div className="page">
                <Switch>
                    {routs}
                </Switch>
            </div>
        )
    }
}

export default PageComponent;