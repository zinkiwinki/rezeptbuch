import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialImports } from './app.material-imports';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';

import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingListComponent, IngredientDialog } from './shopping-list/shopping-list.component';
import { IngredientCreateComponent } from './ingredient-create/ingredient-create.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


// TODO!!!
// - Doku schreiben bzw erweitern und in projekt pushen
// - Jonas zum Repo hinzufügen



@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeEditComponent,
    NavbarComponent,
    HeaderComponent,
    ShoppingListComponent,
    IngredientCreateComponent,
    IngredientDialog,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule, BrowserAnimationsModule, MaterialImports],
  providers: [],
  bootstrap: [AppComponent], 
  entryComponents: [IngredientDialog]
})
export class AppModule {}
