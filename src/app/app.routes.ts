import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { UserListComponent } from './user-list/user-list.component';
import { CustomerComponent } from './customer/customer.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditProductComponent } from './edit-product/edit-product.component';

export const routes: Routes = [
    { path: "", component: WelcomeComponent },
    { path: "about", component: AboutComponent },
    { path: "products", component: ProductListComponent },
    { path: "addproduct", component: AddproductComponent },
    { path: "products/:id", component: ProductDetailComponent },
    { path: "editproduct/:id", component: EditProductComponent },
    { path: "users", component: UserListComponent },
    { path: "customers", component: CustomerComponent },
    { path: "**", component: PageNotFoundComponent },
];
