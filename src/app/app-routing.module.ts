import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipeEditComponent }  from './recipe-edit/recipe-edit.component';
import { ShoppingListComponent }  from './shopping-list/shopping-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent },
  { path: 'edit/:id', component: RecipeEditComponent },
  { path: 'edit', component: RecipeEditComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
