import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialImports } from './app.material-imports';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { MessagesComponent } from './messages/messages.component';

import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

@NgModule({
  declarations: [AppComponent, RecipesComponent, RecipeEditComponent, MessagesComponent, NavbarComponent, HeaderComponent, ShoppingListComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule, BrowserAnimationsModule, MaterialImports],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
