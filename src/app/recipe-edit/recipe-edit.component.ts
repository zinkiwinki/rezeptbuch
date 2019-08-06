import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RecipeService } from '../recipe.service';

import { IngredientService } from '../ingredient.service';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  panelOpenState = true;

  recipe: Recipe;

  ingredients;
  isExisting = true;

  constructor(
    private route: ActivatedRoute,
    private shoppingListService: ShoppingListService,
    private ingredientService: IngredientService,
    private recipeService: RecipeService,
    private location: Location
  ) {}

  getRecipe() {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.recipeService.getRecipe(id).subscribe((recipe) => (this.recipe = recipe));
    }

    if (!this.recipe) {
      this.isExisting = false;
      this.recipe = new Recipe('', '', '', [], '');
    }
  }

  getIngredients() {
    this.ingredientService.getIngredients().subscribe((ingredients) => (this.ingredients = ingredients));
  }

  goBack(): void {
    this.location.back();
  }

  addToShoppingList() {
    this.shoppingListService.add(this.recipe.ingredients);
  }

  save() {
    if (this.isExisting) {
      console.log(this.recipe);
    } else {
      this.recipeService.saveRecipe(this.recipe);
    }
  }

  ngOnInit() {
    this.getRecipe();
    this.getIngredients();
  }
}
