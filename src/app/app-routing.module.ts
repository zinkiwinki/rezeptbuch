import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipeEditComponent }  from './recipe-edit/recipe-edit.component';
import { ShoppingListComponent }  from './shopping-list/shopping-list.component';
import { IngredientCreateComponent }  from './ingredient-create/ingredient-create.component';
import { PageNotFoundComponent }  from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent },
  { path: 'edit/:id', component: RecipeEditComponent },
  { path: 'edit', component: RecipeEditComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'ingredient-create', component: IngredientCreateComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
