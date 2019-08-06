import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipes/recipe';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RecipeService } from '../recipe.service';

import { IngredientService } from '../ingredient.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  panelOpenState = true;

  @Input() recipe: Recipe;

  originalIngredients;
  isExisting = true;
  ingredient;

  constructor(private route: ActivatedRoute, private ingredientService: IngredientService, private recipeService: RecipeService, private location: Location) {
    // this.ingredient.subscribe(this.changeIngredients);
  }

  selectIngredient(){
    console.log("hallo hallo");
    return [];
  }

  changeIngredients(){
    console.log(this.ingredient);
  }

  getRecipe() {
    const id = +this.route.snapshot.paramMap.get('id');
    if (!id) {
      return;
    }
    this.recipeService.getRecipe(id).subscribe((recipe) => (this.recipe = recipe));

    if (!this.recipe) {
      this.isExisting = false;
      return;
    }
    this.ingredient = this.recipe.ingredients;
    console.log(this.ingredient);

    // this.ingredientService.getIngredient();
  }

  getIngredients() {
    this.ingredientService.getIngredients().subscribe((ingredients) => (this.originalIngredients = ingredients));
  }

  goBack(): void {
    this.location.back();
  }

  save(){
    console.log(this.recipe);
    console.log(this.ingredient);
  }

  ngOnInit() {
    this.getRecipe();
    this.getIngredients();
  }
}
