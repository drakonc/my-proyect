import React from 'react';
import BreadcrumbComponent from '../layouts/admin/components/BreadcrumbComponent'

class UserComponent extends React.Component {
    render() {
        const breadcrumb = [{ name: "Dashboard", ruta: "/", icon: "fas fa-home" }, { name: "Usuarios", ruta: "/users", icon: "fas fa-user-friends" }];
        return (
            <div>
                <BreadcrumbComponent breadcrumb={breadcrumb} />
                <div className="container-fluid">
                    <div className="panel shadow">
                        <div className="header">
                            <h2 className="title"><i className="fas fa-user-friends"></i> Usuarios</h2>
                        </div>
                        <div className="inside">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias ullam tenetur libero deleniti, magnam aperiam excepturi recusandae, vitae quisquam non modi. Veniam at ipsam veritatis assumenda iusto culpa impedit a!
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserComponent;
