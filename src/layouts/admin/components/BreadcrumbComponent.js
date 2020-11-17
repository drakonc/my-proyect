import React from 'react';
import { Link } from "react-router-dom";

class BreadcrumbComponent extends React.Component {
    render() {
        const breadcrumb = this.props.breadcrumb;
        const render = breadcrumb.map((item, index) => {
            return (<li className="breadcrumb-item" key={index}>
                <Link to={item.ruta}><i className={item.icon}></i> {item.name}</Link>
            </li>)
        })
        return (
            <div className="container-fluid" >
                <nav area-level="breadcrumb shadow">
                    <ol className="breadcrumb">
                        {render}
                    </ol>
                </nav>
            </div>
        )
    }
}

export default BreadcrumbComponent;
