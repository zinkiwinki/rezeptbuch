import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[];
  selectedRecipe: Recipe;
  image = {
    'background-image': 'url("https://material.angular.io/assets/img/examples/shiba1.jpg")',
    'background-size': 'cover',
  };

  constructor(private recipeService: RecipeService) {}

  getRecipes() {
    this.recipeService.getRecipes().subscribe((recipes) => (this.recipes = recipes));
  }

  ngOnInit() {
    this.getRecipes();
  }
}
