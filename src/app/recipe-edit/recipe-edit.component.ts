import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
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

  // to preselect the ingredients i have to compare all ingredients in the recipe 
  // with all existent ingredients
  compareFn: ((f1: any, f2: any) => boolean) | null = this.compareByValue;

  constructor(
    private route: ActivatedRoute,
    private shoppingListService: ShoppingListService,
    private ingredientService: IngredientService,
    private recipeService: RecipeService
  ) {}

  // this is the method for the comparison
  compareByValue(f1: any, f2: any) {
    return f1 && f2 && f1.name === f2.name;
  }

  // to edit a recipe i only habe an disabled toggle prop
  editRecipe() {
    this.isDisabled = false;
  }

  getRecipe() {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.recipeService.getRecipe(id).subscribe((recipe) => (this.recipe = recipe));
    }

    // if a new recipe will be created
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
    // Same issue as in the shopping-list:
    // to delete all references of an ingredient
    // i have do this
    // IMPORTANT!! -> this will produze an compiling Error, because TypeScript cannot get this far in an object
    // but it works!
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
