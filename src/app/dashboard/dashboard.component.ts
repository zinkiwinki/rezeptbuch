import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) {}

  getRecipes() {
    this.recipeService.getRecipes().subscribe((recipes) => (this.recipes = recipes));
  }

  ngOnInit() {
    this.getRecipes();
  }
}
