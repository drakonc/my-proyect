import { HomeComponent, ProductComponent, CategoryComponent, UserComponent } from '../components/'

const rutas = [
    { exact: true, path: "/", component: HomeComponent },
    { exact: true, path: "/products", component: ProductComponent },
    { exact: true, path: "/categories", component: CategoryComponent },
    { exact: true, path: "/users", component: UserComponent },
];

export default rutas;