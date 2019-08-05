import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipes/recipe';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  @Input() recipe: Recipe;

  ingredients = ['Zwiebel', 'Fleisch', 'Salz', 'Käse'];
  isExisting = true;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private location: Location) {}

  getRecipe() {
    const id = +this.route.snapshot.paramMap.get('id');
    if (!id) {
      return;
    }
    this.recipeService.getRecipe(id).subscribe((recipe) => (this.recipe = recipe));
    
    if (!this.recipe) {
      this.isExisting = false;
    }
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getRecipe();
  }
}
