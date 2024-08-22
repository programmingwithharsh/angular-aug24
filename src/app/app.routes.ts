import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { UserListComponent } from './user-list/user-list.component';

export const routes: Routes = [
    { path: "", component: WelcomeComponent},
    { path: "about", component: AboutComponent},
    { path: "products", component: ProductListComponent},
    { path: "products/:id", component: ProductDetailComponent},
    { path: "users", component: UserListComponent},
    { path: "**", component: PageNotFoundComponent},
];
