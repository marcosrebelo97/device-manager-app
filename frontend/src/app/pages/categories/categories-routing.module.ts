import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories.component';
import { CategoryFormComponent } from './category-form/category-form.component';

const routes: Routes = [
  { path: '', component: CategoriesComponent },
  { path: 'create', component: CategoryFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CategoriesRoutingModule { }
