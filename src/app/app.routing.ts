import { RouterModule, Routes } from '@angular/router';
import {AddCategoryComponent} from './category/add-category/add-category.component';
import {ListCategoryComponent} from './category/list-category/list-category.component';
import {EditCategoryComponent} from './category/edit-category/edit-category.component';

const routes: Routes = [
  { path: 'add-category', component: AddCategoryComponent },
  { path: 'list-category', component: ListCategoryComponent },
  { path: 'edit-category', component: EditCategoryComponent }
];

export const routing = RouterModule.forRoot(routes);
