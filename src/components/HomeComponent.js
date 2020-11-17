import React from 'react';
import BreadcrumbComponent from '../layouts/admin/components/BreadcrumbComponent'

import ModalComponent from './ModalComponent';

class HomeComponent extends React.Component {
    render() {
        const breadcrumb = [{ name: "Dashboard", ruta: "/", icon: "fas fa-home" }];
        return (
            <div>
                <BreadcrumbComponent breadcrumb={breadcrumb} />
                <div className="container-fluid">
                    <div className="panel shadow">
                        <div className="header">
                            <h2 className="title"><i className="fas fa-home"></i> Dashboard</h2>
                        </div>
                        <div className="inside">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias ullam tenetur libero deleniti, magnam aperiam excepturi recusandae, vitae quisquam non modi. Veniam at ipsam veritatis assumenda iusto culpa impedit a!</p>
                            <div>
                                <ModalComponent className="mtop16" name="Jose Castro Cantillo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeComponent;
