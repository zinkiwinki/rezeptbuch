import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe';
import { ActivatedRoute } from '@angular/router';
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

  isDisabled = true;
  recipe: Recipe;

  ingredients;
  isExisting = true;

  compareFn: ((f1: any, f2: any) => boolean) | null = this.compareByValue;

  constructor(
    private route: ActivatedRoute,
    private shoppingListService: ShoppingListService,
    private ingredientService: IngredientService,
    private recipeService: RecipeService
  ) {}

  compareByValue(f1: any, f2: any) {
    return f1 && f2 && f1.name === f2.name;
  }
  editRecipe() {
    this.isDisabled = false;
  }

  getRecipe() {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.recipeService.getRecipe(id).subscribe((recipe) => (this.recipe = recipe));
    }

    if (!this.recipe) {
      this.isExisting = false;
      this.isDisabled = false;
      this.recipe = new Recipe('', '', '', [], '');
    }
  }

  getIngredients() {
    this.ingredientService.getIngredients().subscribe((ingredients) => (this.ingredients = ingredients));
  }

  addToShoppingList() {
    let ings = [];
    for (let ing in this.recipe.ingredients) {
      let recipeIng = this.recipe.ingredients[ing];
      let ingredient = {
        name: recipeIng.name,
        unit: recipeIng.unit,
        amount: recipeIng.amount,
        category: recipeIng.category,
        id: recipeIng.id,
      };
      ings.push(ingredient);
    }

    if (ings && ings.length > 0) {
      this.shoppingListService.add(ings);
    }
  }

  save() {
    if (!this.isExisting) {
      this.recipeService.saveRecipe(this.recipe);
      this.isExisting = true;
    }

    this.isDisabled = true;
  }

  ngOnInit() {
    this.getRecipe();
    this.getIngredients();
  }
}
